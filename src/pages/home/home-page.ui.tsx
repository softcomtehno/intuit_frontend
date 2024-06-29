
import { NewsCard } from '~widgets/news-card';
import StaffList from '~widgets/staff-list/staff-list.ui';
import StaffButtonsSwiper from './ui/StaffCategory.ui';

const news = {
  image:
    'https://intuit.kg/media/news/images/banners/WhatsApp_Image_2024-05-31_at_14.03.57.jpeg',
  title: 'Международная межвузовская научно-практическая конференция',
  description: '31 мая 2024 г. 17:06',
  link: '#',
};

export function HomePage() {
  return (
    <div>
      <h1 className="my-20 font-medium">
        <NewsCard {...news} />
      </h1>
      <div>
<StaffButtonsSwiper/>
        <StaffList />
      </div>
    </div>
  );
}
