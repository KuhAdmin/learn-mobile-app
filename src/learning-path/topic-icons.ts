/**
 * Picks the picture shown on a topic node. The path shows no topic titles (Duolingo-style), so each
 * node gets one of the mockup's icons. Keyword rules give related topics a recognisable picture;
 * anything unmatched cycles through the remaining icons so neighbours still look different.
 */
export type TopicIconName = 'book' | 'search' | 'letters' | 'puzzle' | 'layers' | 'star';

const RULES: readonly [RegExp, TopicIconName][] = [
  [/\bintroduction\b|\bcontext\b|\busage\b|\breading\b/i, 'book'],
  [/identif|recogni|distinguish|\berrors?\b|mistakes?|\bvs\b|differences?\b/i, 'search'],
  [/\bword class|spelling|capital|punctuation|letters?\b|contraction|abbreviat/i, 'letters'],
  [/combination|agreement|pattern|structure|\border\b|position|content words|joining|linking|connect/i, 'puzzle'],
  [/different|types|kinds|forms|functioning|compound|complex|multiple/i, 'layers'],
  [/\beight\b|\bkey\b|essential|special|emphasis|degree|comparison|superlative/i, 'star'],
];

const FALLBACK: readonly TopicIconName[] = ['star', 'puzzle', 'letters', 'layers'];

/**
 * `order` is the topic's 1-based position in its sub-stage. Pass the previous node's icon as `avoid`
 * so two neighbouring nodes never look identical.
 */
export function topicIconFor(title: string, order: number, avoid?: TopicIconName): TopicIconName {
  const matched = RULES.find(([pattern]) => pattern.test(title))?.[1];
  if (matched && matched !== avoid) return matched;
  for (let step = 0; step < FALLBACK.length; step++) {
    const icon = FALLBACK[(order - 1 + step) % FALLBACK.length];
    if (icon !== avoid && icon !== matched) return icon;
  }
  return FALLBACK[0];
}
