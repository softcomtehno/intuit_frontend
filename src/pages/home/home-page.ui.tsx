import { NewsCard } from '~entities/news';
import StaffList from '~widgets/staff-list/staff-list.ui';
import StaffButtonsSwiper from './ui/StaffCategory.ui';
import { ProfessionCard } from '~entities/profession';
import { SwiperIntro } from '~widgets/swiper-intro';
import { EnrollForm } from '~widgets/enroll-form';
import { DiplomList } from '~widgets/diplom-list';

const news = {
  image:
    'https://intuit.kg/media/news/images/banners/WhatsApp_Image_2024-05-31_at_14.03.57.jpeg',
  title: 'Международная межвузовская научно-практическая конференция',
  description: '31 мая 2024 г. 17:06',
  link: '#',
};

const profession = {
  title:
    'Преподавание иностранного языка (английский язык) в образовательных организациях',
  degree: 'Бакалавриат',
  faculties: 'Институт межкультурной коммуникации и психологии',
  url: 'specialization/ss',
};

export function HomePage() {
  return (
    <div>
      <h1 className="my-5 font-medium">
        <SwiperIntro />
      </h1>
      <DegreeCategory />
      <ProgramCategory/>
      <OpportunitiesList />
      <AboutBlock/>
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
  );
}
