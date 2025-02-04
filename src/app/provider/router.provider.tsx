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
import { historyPageRoute } from '~pages/history'
import { visionPageRoute } from '~pages/vision'
import { aboutPageRoute } from '~pages/about'
import { collegesPageRoute } from '~pages/colleges'
import { studentsPageRoute } from '~pages/students'
import { applicantsPageRoute } from '~pages/applicants'
import { admissionsPageRoute } from '~pages/admissions'
import { windowPageRoute } from '~pages/window/window-page.route'
import { teapunPageRoute } from '~pages/teapun'
import { headPageRoute } from '~pages/head'
import { eduManagementPageRoute } from '~pages/edu-managemant'
import { phdPageRoute } from '~pages/phd'
import { documentPageRoute } from '~pages/document'

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
          deparmentPageRoute,
          historyPageRoute,
          visionPageRoute,
          aboutPageRoute,
          collegesPageRoute,
          studentsPageRoute,
          applicantsPageRoute,
          admissionsPageRoute,
          windowPageRoute,
          teapunPageRoute,
          headPageRoute,
          eduManagementPageRoute,
          phdPageRoute,
          documentPageRoute,
        ],
      },
    ],
  },
])

export function BrowserRouter() {
  return <RouterProvider router={router} />
}
