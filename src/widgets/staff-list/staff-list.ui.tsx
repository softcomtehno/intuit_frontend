import { StaffCard, staffQueries, staffTypes } from '~entities/staff'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'


const StaffList = () => {
  const {
    data: staffData,
    isSuccess,
    isError,
    isLoading,
  } = staffQueries.useGetStaffs()

  if (isLoading) {
    return <div>Идёт загрузка данных</div>
  }
  if (isError) {
    return <div>Данные не загружены</div>
  }
  if (isSuccess) {
    return (
      <Swiper
        className=" py-10 px-1 staff-list"
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
    )
  }
}

export default StaffList
