import ScrollTop from '~shared/lib/react-router/scroll-top'
import { Outlet } from 'react-router-dom'
import { Header } from '~widgets/header'
import { Footer } from '~widgets/footer'
import { LanguageSwitcher } from '~widgets/language-switcher/language-switcher'

export function GenericLayout() {
  return (
    <>
      <LanguageSwitcher></LanguageSwitcher>
      <ScrollTop />
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
