import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom'
import { teacherPageRoute } from '~pages/teacher'
import { degreePageRoute } from '~pages/degree/degree-page.route'
import { homePageRoute } from '~pages/home/home-page.route'
import { GenericLayout } from '~app/layout'
import { enrollPageRoute } from '~pages/enroll'
import { institutesPageRoute } from '~pages/institutes'
import { paymentsPageRoute } from '~pages/payments'
import { institutePageRoute } from '~pages/institute'


function BubbleError() {
  const error = useRouteError()
  if (error) throw error
  return null
}

const router = createBrowserRouter([
  {
    errorElement: <BubbleError />,
    children: [
      {
        element: <GenericLayout />,
        children: [
          homePageRoute,
          degreePageRoute,
          enrollPageRoute,
          institutesPageRoute,
          teacherPageRoute,
          paymentsPageRoute,
          institutePageRoute,
        ],
      },
    ],
  },
])

export function BrowserRouter() {
  return <RouterProvider router={router} />
}
