import StaffList from '~widgets/staff-list/staff-list.ui'
import StaffButtonsSwiper from './ui/StaffCategory.ui'
import { SwiperIntro } from '~widgets/swiper-intro'
import { EnrollForm } from '~widgets/enroll-form'
import { DiplomList } from '~widgets/diplom-list'
import { ArticleList } from '~widgets/article-list/article-list.ui'
import { DegreeCategory } from './ui/DegreeCategory.ui'
import { ProgramCategory } from './ui/ProgramCategory'
import { OpportunitiesList } from '~widgets/opportunities-list'
import { AboutBlock } from './ui/AboutBlock.ui'
import { PartnersList } from '~widgets/partners-list'
import { FeedbackVideoList } from '~widgets/feedback-list'




export function HomePage() {
  return (
    <div>
      <h1 className="my-5 font-medium">
        <SwiperIntro />
      </h1>
      <ArticleList />
      <DegreeCategory />
      <ProgramCategory />
      <OpportunitiesList />
      <AboutBlock />
      <div className="my-20">
        <DiplomList />
      </div>
      <div>
        <StaffButtonsSwiper />
        <StaffList />
      </div>
      <PartnersList />
      <EnrollForm />
      <FeedbackVideoList />
    </div>
  )
}
