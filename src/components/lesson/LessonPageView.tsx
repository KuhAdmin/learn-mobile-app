import { StyleSheet, View } from 'react-native';

import type { LessonVisuals } from '@/lessons/presentation';
import type { ContentBlock, LessonPage } from '@/lessons/schema';
import { space } from '@/theme/tokens';

import {
  AnnotatedExampleCard,
  BodyText,
  ExampleCard,
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
  page: LessonPage;
  visuals?: LessonVisuals;
}

/** Renders one content page from its JSON blocks; artwork/layout come from the presentation map. */
export function LessonPageView({ lessonTitle, page, visuals }: LessonPageViewProps) {
  const visual = visuals?.pages[page.page_id];
  const [first, ...rest] = page.content;

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
              if (visual?.sentenceArt && i === 0) return <SentencePictures key={i} example={example} arts={visual.sentenceArt} />;
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
        <WithArt art={visual?.art} layout={visual?.layout}>
          {renderBlock(first)}
        </WithArt>
      ) : null}
      {rest.map(renderBlock)}
      {page.key_takeaway ? <KeyTakeaway text={page.key_takeaway} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  page: { gap: space.xl },
  head: { gap: space.md },
  blocks: { gap: space.lg },
});
