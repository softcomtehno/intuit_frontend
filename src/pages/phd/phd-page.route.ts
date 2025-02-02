import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { PhdPage } from './phd-page.ui'

export const phdPageRoute: RouteObject = {
  path: `phd/`,
  element: createElement(PhdPage),
}
