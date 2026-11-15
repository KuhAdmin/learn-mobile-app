import type { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

import type { IllustrationName } from '@/components/Illustration';
import type { Level } from '@/state/onboarding-model';

export type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

export interface ChoiceOption<Id extends string = string> {
  id: Id;
  title: string;
  subtitle?: string;
  icon?: IconName;
}

export interface IntroPage {
  id: string;
  illustration: IllustrationName;
  title: string;
  body: string;
}

/** Carousel pages shown after the splash screen. */
export const INTRO_PAGES: IntroPage[] = [
  {
    id: 'grammar',
    illustration: 'books',
    title: 'Welcome to Learn',
    body: 'Discover the joy of learning English',
  },
];

export const LEVEL_OPTIONS: ChoiceOption<Level>[] = [
  { id: 'beginner', title: 'Beginner' },
  { id: 'intermediate', title: 'Intermediate' },
  { id: 'advanced', title: 'Advanced' },
];

/** Why the learner wants English. Up to MAX_GOALS can be chosen. */
export const GOAL_OPTIONS: ChoiceOption[] = [
  {
    id: 'everyday',
    title: 'Everyday Communication',
    subtitle: 'Speak naturally and confidently in everyday situations.',
    icon: 'forum-outline',
  },
  {
    id: 'career',
    title: 'Career & Workplace',
    subtitle: 'Communicate professionally in emails, meetings and presentations.',
    icon: 'briefcase-outline',
  },
  {
    id: 'exams',
    title: 'Exams & Certifications',
    subtitle: 'Prepare for IELTS, TOEFL, Cambridge and PTE.',
    icon: 'certificate-outline',
  },
  {
    id: 'academic',
    title: 'Academic Excellence',
    subtitle: 'Improve academic writing, essays, research and presentations.',
    icon: 'school-outline',
  },
  {
    id: 'interviews',
    title: 'Job Interviews',
    subtitle: 'Answer confidently and make a strong impression.',
    icon: 'account-tie-outline',
  },
  {
    id: 'abroad',
    title: 'Living Abroad',
    subtitle: 'Navigate daily life, social situations and essential services.',
    icon: 'earth',
  },
];

export const DAILY_MINUTE_OPTIONS = [5, 10, 15, 20] as const;

export const BENEFITS: ChoiceOption[] = [
  {
    id: 'lessons',
    title: 'Structured grammar lessons',
    subtitle: 'Clear rules, examples, and practice',
    icon: 'book-open-page-variant-outline',
  },
  {
    id: 'vocab',
    title: 'Vocabulary building',
    subtitle: 'Curated words, flashcards, and review',
    icon: 'cards-outline',
  },
];

export const LEVEL_LABEL: Record<Level, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};
