import { Suspense } from 'react';
import RequestAccessClientPage from './client-page';

export default function Page() {
  return (
    <Suspense>
      <RequestAccessClientPage />
    </Suspense>
  );
}
