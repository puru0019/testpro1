import { lazy } from 'react';

export const Button = lazy(() => import(/* webpackChunkName: 'button' */'./button/button'));