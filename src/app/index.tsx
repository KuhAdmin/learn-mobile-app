import { Redirect } from 'expo-router';

import { useOnboarding } from '@/state/onboarding-context';

/**
 * Entry route. The native splash (the brand logo, see `app.json`) shows for the first few seconds;
 * then this goes straight to the intro, or to the Learning Path once onboarding is finished.
 */
export default function Index() {
  const onboarded = Boolean(useOnboarding().state.completedAt);
  return <Redirect href={onboarded ? '/learn' : '/intro'} />;
}
