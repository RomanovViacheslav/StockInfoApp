import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../ui';
import { MainPageAsync, NotFoundPageAsync } from '../page';
import { PATHS } from '../shared';
import { Loader } from '../components';

export const Router = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path={PATHS.MAIN} element={<MainLayout />}>
        <Route index element={<MainPageAsync />} />
        <Route path={PATHS.NOT_FOUND} element={<NotFoundPageAsync />} />
      </Route>
    </Routes>
  </Suspense>
);
