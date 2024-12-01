import React from 'react';
import { Typography } from '@mui/material';
import { StaffCard, staffQueries, staffTypes } from '~entities/staff';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface DescriptionCardProps {
  subtitle: string;
  text: string;
  subtext: string;
  id: number;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  subtitle,
  text,
  subtext,
  id,
}) => {
  const {
    data: staffData = [], // Предотвращение ошибок, если данные отсутствуют
    isSuccess,
    isError,
    isLoading,
  } = staffQueries.useSoftStaffs(String(id));

  const filteredAndSortedStaff = isSuccess
  ? staffData.data.sort((a: staffTypes.Staff, b: staffTypes.Staff) => {
        return b.status - a.status; // Сортировка по убыванию значения status
      })
  : [];
  
  return (
    <div className="flex gap-5 my-10">
      <div className="p-5 bg-white shadow-lg rounded-lg max-w-[55%]">
        <Typography
          variant="h3"
          component="h3"
          className="text-[2rem] max-w-[500px] font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
        >
          Об Институте
        </Typography>
        <p className="mt-5 font-semibold leading-7">{subtext}</p>
      </div>

      <div className="min-w-[45%] max-w-[45%] bg-[#e0e1e5] p-5 rounded-xl">
        <Typography
          variant="h3"
          component="h3"
          className="text-[2rem] max-w-[500px] font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
        >
          Ведущие преподаватели
        </Typography>

        <div className="flex justify-center py-5">
          {isLoading && <div>Загрузка данных...</div>}
          {isError && <div>Произошла ошибка при загрузке данных.</div>}

          {isSuccess && staffData?.data?.length > 0 ? (
            <Swiper
              className="py-10 px-1 staff-list"
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {filteredAndSortedStaff.map((staff) => (
                <SwiperSlide className="flex justify-center" key={staff.id}>
                  <StaffCard {...staff} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            isSuccess && <div>Нет данных о преподавателях.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
