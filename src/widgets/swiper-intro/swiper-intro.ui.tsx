import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { IntroCard } from '~entities/intro'
import { useTranslation } from 'react-i18next'

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
            img={'https://synergy.ru/assets/template/v5/new3/images/s_main_banner/main_banner_0_lg.webp'}
            title={t('enrollPage.introCard.title')}
          />
        </SwiperSlide>

        <SwiperSlide>
          <IntroCard
            description={t('someNamespace.someDescription')} // Добавьте соответствующий ключ из JSON для замены
            img={'https://synergy.ru/assets/template/v5/new3/images/s_main_banner/main_banner_2_lg.webp'}
            title={t('someNamespace.someTitle')} // Добавьте соответствующий ключ из JSON для замены
          />
        </SwiperSlide>

        <SwiperSlide>
          <IntroCard
            description={t('someNamespace.anotherDescription')} // Добавьте соответствующий ключ из JSON для замены
            img={'https://synergy.ru/assets/template/v5/new3/images/s_main_banner/main_banner_1_lg.webp'}
            title={t('someNamespace.anotherTitle')} // Добавьте соответствующий ключ из JSON для замены
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
