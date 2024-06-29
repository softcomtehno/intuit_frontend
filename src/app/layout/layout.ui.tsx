import ScrollTop from '~shared/lib/react-router/scroll-top';
import { Outlet } from 'react-router-dom';
import { Header } from '~widgets/header';
import { Footer } from '~widgets/footer';

export function GenericLayout() {
  return (
    <>
      <ScrollTop />
      <Header />
      <div className='container'>
      <Outlet />
      </div>
      <Footer />
    </>
  );
}
