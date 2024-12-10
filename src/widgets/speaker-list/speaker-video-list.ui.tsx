import { Box, Typography } from '@mui/material'
import { speakerQueries } from '~entities/speaker'
import { SpeakerVideo } from '~entities/speaker'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper/modules'
import { createPortal } from 'react-dom'

interface SpeakerVideoListProps {
  facultyId?: number
}

export const SpeakerVideoList: React.FC<SpeakerVideoListProps> = ({
  facultyId,
}) => {
  const {
    data: filteredSpeakersData,
    isLoading: isFilteredLoading,
    isError: isFilteredError,
  } = speakerQueries.useGetSpeakers(facultyId)

  const {
    data: allSpeakersData,
    isLoading: isAllLoading,
    isError: isAllError,
  } = speakerQueries.useGetSpeakers()

  const isLoading = isFilteredLoading || isAllLoading
  const isError = isFilteredError && isAllError

  const speakersData =
    filteredSpeakersData?.data?.length > 0
      ? filteredSpeakersData.data
      : allSpeakersData?.data

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (isError) {
    return <div>Ошибка загрузки данных</div>
  }

  if (!speakersData || speakersData.length === 0) {
    return <div>Нет данных для отображения</div>
  }

  return (
    <>
      <Typography
        variant="h3"
        component="h3"
        className="text-[2.5rem] font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
      >
        Отзывы студентов
      </Typography>
      <Box className="py-10 cursor-pointer grid grid-cols-5 gap-5 md:grid-cols-subgrid">
        {speakersData.map((item, i) => {
          if (i <= 4) {
            return (
              <div className="flex justify-center " key={i}>
                <SpeakerVideo {...item} />
              </div>
            )
          }
          return null
        })}
      </Box>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          slidesPerView={5}
          // className="mySwiper"
          className="py-10 cursor-pointer  gap-5 "
        >
          {speakersData.map((item, i) => {
            return (
              <SwiperSlide className="flex justify-center " key={i}>
                <SpeakerVideo {...item} />
              </SwiperSlide>
            )
          })}
        </Swiper>
    </>
  )
}
