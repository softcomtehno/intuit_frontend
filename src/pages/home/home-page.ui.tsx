import { NewsCard } from '~widgets/news-card'
import StaffList from '~widgets/staff-list/staff-list.ui'
import StaffButtonsSwiper from './ui/StaffCategory.ui'
import { ProfessionCard } from '~entities/profession'
import { SwiperIntro } from '~widgets/swiper-intro'
import { EnrollForm } from '~widgets/enroll-form'

const news = {
  image:
    'https://intuit.kg/media/news/images/banners/WhatsApp_Image_2024-05-31_at_14.03.57.jpeg',
  title: 'Международная межвузовская научно-практическая конференция',
  description: '31 мая 2024 г. 17:06',
  link: '#',
}

const profession = {
  title:
    'Преподавание иностранного языка (английский язык) в образовательных организациях',
  degree: 'Бакалавриат',
  faculties: 'Институт межкультурной коммуникации и психологии',
  url: 'Maksat loh',
}

export function HomePage() {
  return (
    <div>
      <h1 className="my-20 font-medium">
        {/* <IntroCard title={'Специалитет'}></IntroCard> */}
        <SwiperIntro></SwiperIntro>
        <NewsCard {...news} />
        <ProfessionCard {...profession}></ProfessionCard>
      </h1>
      <EnrollForm />
      <div className="my-20"></div>
      <div>
        <StaffButtonsSwiper />
        <StaffList />
      </div>
    </div>
  )
}
