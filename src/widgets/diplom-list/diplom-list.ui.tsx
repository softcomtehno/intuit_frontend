import { Button, Card, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Gerb from '../../assets/gerb.svg'
import EGerb from '../../assets/eugerb.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Fancybox from '~widgets/diplom-list/Fancybox'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export const DiplomList = () => {
  const { t } = useTranslation()

  return (
    <div className=" my-20">
      <Typography
        variant="h3"
        component="h3"
        className="text-[2.5rem] font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
      >
        {t('homepage.diploma.yourFutureDiploma')}
      </Typography>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Swiper
          className="py-10 px-1 diplom-list"
          modules={[Pagination]}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            360: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://muit.makalabox.com/documents/bakalavr.pdf"
              className="lg:flex lg:justify-center"
            >
              <Card
                className="group transition duration-300 max-w-[420px]  bg-white p-5 flex  gap-5 rounded-xs border border-gray   hover:bg-blue/5 
    md:flex-col-reverse  md:gap-6 min-h-[190px]"
              >
                <div className="flex flex-col justify-between h-full text-left">
                  <div>
                    <Typography
                      variant="h4"
                      className="font-bold text-[20px] leading-8 text-blue-900 group-hover:text-blue"
                    >
                      {t('homepage.diploma.bachelor.degree')}
                    </Typography>
                    <Typography className="mt-2 text-gray-600 text-[15px] font-medium md:px-4">
                      {t('homepage.diploma.bachelor.description')}
                    </Typography>
                  </div>

                  <Button className="self-start mt-3 shadow-none bg-blue text-white p-1 rounded px-4 font-medium                   lg:self-center">
                    {t('homepage.diploma.buttonText')}
                  </Button>
                </div>

                <img
                  src={Gerb}
                  alt="Diploma Icon"
                  className="w-[100px] md:w-[120px] transition duration-300 group-hover:scale-105"
                />
              </Card>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery-2"
              href="https://muit.makalabox.com/documents/diploms/magistratura.pdf"
              className="lg:flex lg:justify-center"
            >
              <Card
                className="group transition duration-300 max-w-[420px]  bg-white p-5 flex  gap-5 rounded-xs border border-gray   hover:bg-blue/5 
    md:flex-col-reverse  md:gap-6 min-h-[190px]"
              >
                <div className="flex flex-col justify-between text-left">
                  <div>
                    <Typography
                      variant="h4"
                      className="font-semibold text-[20px] leading-8"
                    >
                      {t('homepage.diploma.master.degree')}
                    </Typography>
                    <Typography className="mt-2 text-gray-600 text-[15px] font-medium md:px-4">
                      {t('homepage.diploma.master.description')}
                    </Typography>
                  </div>
                  <Button className="self-start mt-3 shadow-none bg-blue text-white p-1 rounded px-4 font-medium                   lg:self-center">
                    {t('homepage.diploma.buttonText')}
                  </Button>
                </div>
                <img
                  src={Gerb}
                  alt="Diploma Icon"
                  className="w-[100px] md:w-[120px] transition duration-300 group-hover:scale-105"
                />
              </Card>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery-3"
              href="https://muit.makalabox.com/documents/diploms/magistratura.pdf"
              className="lg:flex lg:justify-center"
            >
              <Card
                className="group transition duration-300 max-w-[420px]  bg-white p-5 flex  gap-5 rounded-xs border border-gray   hover:bg-blue/5 
    md:flex-col-reverse  md:gap-6 min-h-[190px]"
              >
                <div className="flex flex-col justify-between text-left">
                  <div>
                    <Typography
                      variant="h4"
                      className="font-semibold text-[20px] leading-8"
                    >
                      {t('homepage.diploma.postgraduate.degree')}
                    </Typography>
                    <Typography className="mt-2 text-gray-600 text-[15px] font-medium md:px-4">
                      {t('homepage.diploma.postgraduate.description')}
                    </Typography>
                  </div>
                  <Button
                    className="self-start mt-3 shadow-none bg-blue text-white p-1 rounded px-4 font-medium
                    lg:self-center

                  "
                  >
                    {t('homepage.diploma.buttonText')}
                  </Button>
                </div>
                <img
                  src={Gerb}
                  alt="Diploma Icon"
                  className="w-[100px] md:w-[120px] transition duration-300 group-hover:scale-105"
                />
              </Card>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery-4"
              href="https://muit.makalabox.com/documents/diploms/diplom_en.pdf"
              className="lg:flex lg:justify-center"
            >
              <Card
                className="group transition duration-300 max-w-[420px]  bg-white p-5 flex  gap-5 rounded-xs border border-gray   hover:bg-blue/5 
    md:flex-col-reverse  md:gap-6 min-h-[190px]"
              >
                <div className="flex flex-col justify-between lg:items-center text-left">
                  <div>
                    <Typography
                      variant="h4"
                      className="font-semibold text-[18px] leading-5"
                    >
                      {t('homepage.diploma.diplomaSupplement.title')}
                    </Typography>
                    <Typography className="mt-2 text-gray-600 text-[15px] font-medium md:px-4">
                      {t('homepage.diploma.diplomaSupplement.description')}
                    </Typography>
                  </div>
                  <Button
                    className="self-start mt-3 shadow-none bg-blue text-white p-1 rounded px-4 font-medium 
                  lg:self-center
                  "
                  >
                    {t('homepage.diploma.buttonText')}
                  </Button>
                </div>
                <img
                  src={EGerb}
                  alt="Diploma Icon"
                  className="w-[100px] md:w-[120px] transition duration-300 group-hover:scale-105"
                />
              </Card>
            </a>
          </SwiperSlide>
        </Swiper>
      </Fancybox>
    </div>
  )
}

export default DiplomList
