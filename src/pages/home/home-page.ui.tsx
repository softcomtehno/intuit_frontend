import StaffList from '~widgets/staff-list/staff-list.ui'
import { SwiperIntro } from '~widgets/swiper-intro'
import { EnrollForm } from '~widgets/enroll-form'
import { DiplomList } from '~widgets/diplom-list'
import { SpeakerVideoList } from '~widgets/speaker-list'
import { PartnersList } from '~widgets/partners-list'
import { OpportunitiesList } from '~widgets/opportunities-list'
import { DegreeCategory } from './ui/DegreeCategory.ui'
import { ProgramCategory } from '~widgets/programm-category'
import { AboutBlock } from './ui/AboutBlock.ui'
import { ArticleList } from '~widgets/article-list/article-list.ui'
import { Typography } from '@mui/material'
import { License } from './ui/License.ui'
import { NewsList } from '~widgets/news-list'
import { EventList } from '~widgets/events-list'
import { t } from 'i18next'

export function HomePage() {
  return (
    <div>
      <EventList/>
      <h1 className="my-5 font-medium">
        <SwiperIntro />
      </h1>
      <DegreeCategory />
      <License />
      <ProgramCategory />
      <OpportunitiesList />
      <AboutBlock />
      <div className="my-20 ">
        <DiplomList />
      </div>
      <div className="container">
        <Typography
          variant="h3"
          component="h3"
          className="text-[2.5rem] font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
        >
          {t("homepage.TeachingStaff")}
        </Typography>
        <StaffList />
      </div>
      <NewsList />
      <PartnersList />
      <ArticleList />
      <EnrollForm />
      <SpeakerVideoList />
    </div>
  )
}
