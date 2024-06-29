import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { TeacherPage } from './teacher-page.ui'

export const teacherPageRoute: RouteObject = {
  path: `teachers/:slug`,
  element: createElement(TeacherPage),
}
