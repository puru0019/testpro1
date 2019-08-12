import { lazy } from 'react';

export const Modal = lazy(() => import(/* webpackChunkName: 'modal' */'./dialog/modal'));