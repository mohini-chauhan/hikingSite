import React, { lazy, Suspense } from 'react';

const LazyLearnMore = lazy(() => import('./LearnMore'));

const LearnMore = props => (
  <Suspense fallback={null}>
    <LazyLearnMore {...props} />
  </Suspense>
);

export default LearnMore;
