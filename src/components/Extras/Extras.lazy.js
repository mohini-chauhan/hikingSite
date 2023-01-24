import React, { lazy, Suspense } from 'react';

const LazyExtras = lazy(() => import('./Extras'));

const Extras = props => (
  <Suspense fallback={null}>
    <LazyExtras {...props} />
  </Suspense>
);

export default Extras;
