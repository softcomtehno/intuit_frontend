import { Typography } from '@mui/material'
import { speakerQueries, SpeakerVideo } from '~entities/speaker'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import './index.css'
import { t } from 'i18next'

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
    return <div>{t("loading.loading")}...</div>
  }

  if (isError) {
    return <div>{t("loading.error")}</div>
  }

  if (!speakersData || speakersData.length === 0) {
    return <div>{t("loading.dataNotLoaded")}</div>
  }

  return (
    <>
      <Typography
        variant="h3"
        component="h3"
        className="text-[2.5rem] font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
      >
       {t("reviews.studentReviews")}
      </Typography>

      <Swiper
        className="py-10 pointer"
        slidesPerView={5}
        scrollbar={{}}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Scrollbar]}
        spaceBetween={30} // Увеличиваем расстояние между элементами
      >
        {speakersData.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <SpeakerVideo {...item}></SpeakerVideo>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
