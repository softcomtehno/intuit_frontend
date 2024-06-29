import { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import { pathKeys } from '~shared/lib/react-router';
import { EnrollPage } from './enroll-page.ui';

export const enrollPageRoute: RouteObject = {
  path: pathKeys.enroll(),
  element: createElement(EnrollPage),
};
