import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import StaffCard from '~widgets/staff-card/staff-card.ui';

const teachers = [
  {
    name: 'Бегалиев Улугбек Турдалиевич',
    position:
      'Ректор Международного университета инновационных технологий (МУИТ), д.т.н., профессор МУИТ',
    image:
      'https://intuit.kg/media/faculty/images/teachers/photo_2022-05-12_17-42-53.jpg',
    phone: '+996 998 998 998',
  },
  {
    name: 'Матыева Акбермет Карыбековна',
    position:
      'Проректор по государственному языку, инновациям и развитию МУИТ, директор ИСИТ, д.т.н., профессор МУИТ',
    image: 'https://intuit.kg/media/faculty/images/teachers/matyeva.jpg',
    phone: '+996 996 996 996',
  },
  {
    name: 'Касымов Туратбек Мугалимович',
    position:
      'Лауреат государственной премии КР в области науки и техники, проректор по учебно-воспитательной работе, к.т.н., и.о.профессор МУИТ',
    image:
      'https://intuit.kg/media/faculty/images/teachers/photo5361744925475058187.jpg',
    phone: '+996 997 997 997',
  },
];

const StaffList = () => {
  return (
    <Swiper
      className=" py-10 px-1 staff-list"
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={2.5}
      pagination={{ clickable: true }}
    >
      {teachers.map((teacher, index) => (
        <SwiperSlide key={index}>
          <StaffCard
            name={teacher.name}
            position={teacher.position}
            image={teacher.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StaffList;
