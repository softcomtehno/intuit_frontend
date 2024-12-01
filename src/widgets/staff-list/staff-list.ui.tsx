import { StaffCard, staffQueries, staffTypes } from '~entities/staff';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface StaffListProps {
  filterByRanks?: string[]; // Например: ["professor", "doctor"]
  filterByFaculty?: number; // Например: 3
}

const StaffList: React.FC<StaffListProps> = ({ filterByRanks, filterByFaculty }) => {
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

  const filteredAndSortedStaff = isSuccess
    ? staffData.data
        .filter((staff: staffTypes.Staff) => {
          const rankMatches = filterByRanks
            ? filterByRanks.includes(staff.rank)
            : true;
          const facultyMatches = filterByFaculty
            ? staff.faculty.includes(filterByFaculty)
            : true;
          return rankMatches && facultyMatches;
        })
        .sort((a: staffTypes.Staff, b: staffTypes.Staff) => {
          return Number(a.position) - Number(b.position);
        })
    : [];

  if (!filteredAndSortedStaff.length) {
    return <div>{t('homepage.noResults')}</div>;
  }
  
  return (
    <Swiper
      className="py-10 px-1 staff-list"
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={2.5}
      pagination={{ clickable: true }}
    >
      {filteredAndSortedStaff.map((staff: staffTypes.Staff) => (
        <SwiperSlide key={staff.id}>
          <StaffCard {...staff} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StaffList;
