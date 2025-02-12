import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { IntroCard } from '~entities/intro'
import { useTranslation } from 'react-i18next'
import Intro from './iiio.png'

export const SwiperIntro = () => {
  const { t } = useTranslation()

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper container w-full h-[550px] sm:h-auto"
      >
        <SwiperSlide className="bg-center bg-cover">
          <IntroCard
            description={t('enrollPage.introCard.description')}
            img={Intro}
            title={t('enrollPage.introCard.title')}
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
