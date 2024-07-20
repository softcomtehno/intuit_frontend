import StaffList from '~widgets/staff-list/staff-list.ui';
import StaffButtonsSwiper from './ui/StaffCategory.ui';
import { SwiperIntro } from '~widgets/swiper-intro';
import { EnrollForm } from '~widgets/enroll-form';
import { DiplomList } from '~widgets/diplom-list';
import { FeedbackList, FeedbackVideoList } from '~widgets/feedback-list';
import { PartnersList } from '~widgets/partners-list';
import { OpportunitiesList } from '~widgets/opportunities-list';
import { DegreeCategory } from './ui/DegreeCategory.ui';
import { ProgramCategory } from './ui/ProgramCategory';
import { AboutBlock } from './ui/AboutBlock.ui';
import { articleQueries } from '~entities/makalabox/degree';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { ArticleList } from '~widgets/article-list/article-list.ui';

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
  url: 'specialization/professiya-prodakt-menedzher',
};

export function HomePage() {
  return (
    <div>
      <h1 className="my-5 font-medium">
        <SwiperIntro />
      </h1>
      <ArticleList/>
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
