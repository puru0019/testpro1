import { lazy } from 'react';

export const Button = lazy(() => import(/* webpackChunkName: 'button' */'./button/button'));
export const Modal = lazy(() => import(/* webpackChunkName: 'modal' */'./dialog/modal'));