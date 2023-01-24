import React, { lazy, Suspense } from 'react';

const LazyBenefits = lazy(() => import('./Benefits'));

const Benefits = props => (
  <Suspense fallback={null}>
    <LazyBenefits {...props} />
  </Suspense>
);

export default Benefits;
