import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { StudentsPage } from './students-page.ui';

export const studentsPageRoute: RouteObject = {
  path: `students/`,
  element: createElement(StudentsPage),
};
