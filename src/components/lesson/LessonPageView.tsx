import { StyleSheet, View } from 'react-native';

import type { LessonVisuals } from '@/lessons/presentation';
import type { ContentBlock } from '@/lessons/schema';
import type { LessonScreen } from '@/lessons/screens';
import { space } from '@/theme/tokens';

import {
  AnnotatedExampleCard,
  BodyText,
  ExampleCard,
  ExplanationCard,
  LessonArtImage,
  KeyTakeaway,
  LessonPill,
  NoteCard,
  PageTitle,
  SentencePictures,
  SummaryList,
  WithArt,
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
  const [first, ...rest] = screen.blocks;

  const renderBlock = (block: ContentBlock) => {
    switch (block.type) {
      case 'text':
        return <BodyText key={block.block_id}>{block.text}</BodyText>;
      case 'note':
        return <NoteCard key={block.block_id} text={block.text} />;
      case 'list':
        return <SummaryList key={block.block_id} items={block.items} />;
      case 'example':
        return (
          <View key={block.block_id} style={styles.blocks}>
            {block.examples.map((example, i) => {
              const phrases = visuals?.annotations?.[block.block_id];
              if (phrases && i === 0) return <AnnotatedExampleCard key={i} example={example} phrases={phrases} />;
              if (visual?.sentenceArt && i === 0) {
                // A split page shows the pictures on one screen and the explanation on the next.
                return (
                  <View key={i} style={styles.blocks}>
                    {screen.examplePart !== 'explanation' ? (
                      <SentencePictures example={example} arts={visual.sentenceArt} />
                    ) : null}
                    {screen.examplePart !== 'sentences' ? <ExplanationCard text={example.explanation} /> : null}
                  </View>
                );
              }
              return <ExampleCard key={i} example={example} art={i === 0 ? visual?.exampleArt : undefined} />;
            })}
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
      {first ? (
        // The page's main picture sits with its first block (intro text, or the summary list).
        <WithArt art={screen.showArt ? visual?.art : undefined} layout={visual?.layout}>
          {renderBlock(first)}
        </WithArt>
      ) : screen.showArt && visual?.art ? (
        // A screen with no blocks left (summary part 2) shows the picture on its own.
        <View style={styles.soloArt}>
          <LessonArtImage art={visual.art} width={visual.art.aspect < 0.8 ? '46%' : '80%'} />
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
