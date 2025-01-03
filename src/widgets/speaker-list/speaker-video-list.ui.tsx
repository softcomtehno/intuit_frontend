import { Typography } from '@mui/material'
import { speakerQueries } from '~entities/speaker'
import { SpeakerVideo } from '~entities/speaker'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import './index.css'
import { useState } from 'react'

interface SpeakerVideoListProps {
  facultyId?: number
}

export const SpeakerVideoList: React.FC<SpeakerVideoListProps> = ({
  facultyId = null,
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

      <Swiper
        className="py-10 pointer"
        slidesPerView={5}
        scrollbar={{}}
        modules={[Scrollbar]}
        spaceBetween={30} // Увеличиваем расстояние между элементами
      >
        {speakersData.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <SpeakerVideo
                {...item}
                
              ></SpeakerVideo>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
