import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { EduManagementPage } from './edu-managemant-page.ui';

export const eduManagementPageRoute: RouteObject = {
  path: `educatiion-management/`,
  element: createElement(EduManagementPage),
};
