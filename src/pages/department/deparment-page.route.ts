import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { DeparmentPage } from './deparment-page.ui';

export const deparmentPageRoute: RouteObject = {
  path: `departament-obespecheniya-i-kontrolya-kachestva-obrazovaniya/`,
  element: createElement(DeparmentPage),
};
