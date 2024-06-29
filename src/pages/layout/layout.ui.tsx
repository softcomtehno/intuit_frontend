import ScrollTop from '~shared/lib/react-router/scroll-top';
import { Outlet } from 'react-router-dom';

export function GenericLayout() {
  return (
    <>
      <ScrollTop />
      <Outlet />
    </>
  );
}
