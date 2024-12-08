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
import { newsPageRoute } from '~pages/news'
import { paymentsPageRoute } from '~pages/payments'
import { institutePageRoute } from '~pages/institute'
import { specializationPageRoute } from '~pages/specialization'
import { deparmentPageRoute } from '~pages/department'



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
          newsPageRoute,
          paymentsPageRoute,
          institutePageRoute,
          specializationPageRoute,
          deparmentPageRoute
        ],
      },
    ],
  },
])

export function BrowserRouter() {
  return <RouterProvider router={router} />
}
