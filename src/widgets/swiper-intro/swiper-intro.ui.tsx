import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { IntroCard } from '~entities/intro'

export const SwiperIntro = () => {
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
            description={
              'Мы собрали подробную информацию о институтах, студенческой жизни и возможностях трудоустройства. Узнай про обучение в один клик!'
            }
            img={
              'https://synergy.ru/assets/template/v5/new3/images/s_main_banner/main_banner_0_lg.webp'
            }
            title={'Подбери программу обучения'}
          ></IntroCard>
        </SwiperSlide>

        <SwiperSlide>
          <IntroCard
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis doloribus velit minus in id corrupti harum nemo accusamus illum!'
            }
            img={
              'https://synergy.ru/assets/template/v5/new3/images/s_main_banner/main_banner_2_lg.webp'
            }
            title={'Образование в Кыргызстане'}
          ></IntroCard>
        </SwiperSlide>
        <SwiperSlide>
          <IntroCard
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis doloribus velit minus in id corrupti harum nemo accusamus illum!'
            }
            img={
              'https://synergy.ru/assets/template/v5/new3/images/s_main_banner/main_banner_1_lg.webp'
            }
            title={'Образование в Покровке'}
          ></IntroCard>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
