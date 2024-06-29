import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom';
import { homePageRoute } from '~pages/home/home-page.route';
import { GenericLayout } from '~app/layout';

function BubbleError() {
  const error = useRouteError();
  if (error) throw error;
  return null;
}

const router = createBrowserRouter([
  {
    errorElement: <BubbleError />,
    children: [
      {
        element: <GenericLayout />,
        children: [
          homePageRoute,
        ],
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
