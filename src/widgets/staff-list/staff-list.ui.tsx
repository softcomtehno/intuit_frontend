import { StaffCard, staffQueries, staffTypes } from '~entities/staff';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const StaffList = () => {
  const { t } = useTranslation();
  
  const {
    data: staffData,
    isSuccess,
    isError,
    isLoading,
  } = staffQueries.useGetStaffs();

  if (isLoading) {
    return <div>{t('homepage.loading.loading')}</div>;
  }
  
  if (isError) {
    return <div>{t('homepage.loading.error')}</div>;
  }
  console.log(staffData, "stadfff");
  
  if (isSuccess) {
    return (
      <Swiper
        className="py-10 px-1 staff-list"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2.5}
        pagination={{ clickable: true }}
      >
        {staffData.data.map((staff: staffTypes.Staff) => (
          <SwiperSlide key={staff.id}>
            <StaffCard {...staff} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default StaffList;
