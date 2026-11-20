import { StyleSheet, View } from 'react-native';

import type { LessonVisuals } from '@/lessons/presentation';
import type { ContentBlock } from '@/lessons/model';
import type { LessonScreen } from '@/lessons/screens';
import { space } from '@/theme/tokens';

import {
  AnnotatedExampleCard,
  BodyText,
  ComparisonCard,
  ExampleCard,
  ExplanationCard,
  KeyTakeaway,
  LessonArtImage,
  LessonPill,
  ListBlock,
  NoteCard,
  PageTitle,
  RuleCard,
  SentencePictures,
  WarningCard,
  WithArt,
  wideArtWidth,
} from './LessonBlocks';

interface LessonPageViewProps {
  lessonTitle: string;
  screen: LessonScreen;
  visuals?: LessonVisuals;
}

/**
 * Renders one screen of a content page from its JSON blocks; artwork/layout come from the presentation map.
 * Both screens of a split page repeat the page title so the example keeps its context.
 */
export function LessonPageView({ lessonTitle, screen, visuals }: LessonPageViewProps) {
  const { page } = screen;
  const visual = visuals?.pages[page.page_id];
  // The picture goes under the screen's leading text (or under its first block if it has no text).
  const firstNonText = screen.blocks.findIndex((b) => b.type !== 'text');
  const lead = firstNonText === -1 ? screen.blocks : screen.blocks.slice(0, Math.max(1, firstNonText));
  const rest = screen.blocks.slice(lead.length);

  const renderBlock = (block: ContentBlock) => {
    switch (block.type) {
      case 'text':
        return <BodyText key={block.block_id}>{block.text}</BodyText>;
      case 'note':
        return <NoteCard key={block.block_id} text={block.text} title={block.title} />;
      case 'list':
        return <ListBlock key={block.block_id} block={block} />;
      case 'comparison':
        return (
          <ComparisonCard
            key={block.block_id}
            block={block}
            arts={visuals?.comparisonArt?.[block.block_id]}
            part={screen.blockPart === 'items' || screen.blockPart === 'points' ? screen.blockPart : 'all'}
          />
        );
      case 'warning':
        return <WarningCard key={block.block_id} block={block} />;
      case 'rule':
        return <RuleCard key={block.block_id} block={block} />;
      case 'question':
        return null; // played as its own question step

      case 'example':
        return (
          <View key={block.block_id} style={styles.blocks}>
            {(() => {
              const [example] = block.examples;
              const phrases = visuals?.annotations?.[block.block_id];
              if (phrases) return <AnnotatedExampleCard example={example} phrases={phrases} />;
              if (visual?.sentenceArt) {
                // A split page shows the pictures on one screen and the explanation on the next.
                return (
                  <>
                    {screen.blockPart !== 'explanation' ? (
                      <SentencePictures example={example} arts={visual.sentenceArt} />
                    ) : null}
                    {screen.blockPart !== 'sentences' ? <ExplanationCard text={example.explanation} /> : null}
                  </>
                );
              }
              return <ExampleCard examples={block.examples} arts={visual?.exampleArts} />;
            })()}
          </View>
        );
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.head}>
        <LessonPill label={lessonTitle} />
        <PageTitle>{page.title}</PageTitle>
      </View>
      {lead.length ? (
        <WithArt art={screen.showArt ? visual?.art : undefined} layout={visual?.layout}>
          <View style={styles.blocks}>{lead.map(renderBlock)}</View>
        </WithArt>
      ) : screen.showArt && visual?.art ? (
        // A screen with no blocks left (summary closing screen) shows the picture on its own.
        <View style={styles.soloArt}>
          <LessonArtImage art={visual.art} width={wideArtWidth(visual.art.aspect)} />
        </View>
      ) : null}
      {rest.map(renderBlock)}
      {screen.showTakeaway && page.key_takeaway ? <KeyTakeaway text={page.key_takeaway} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  page: { gap: space.xl },
  head: { gap: space.md },
  blocks: { gap: space.lg },
  soloArt: { alignItems: 'center' },
});
