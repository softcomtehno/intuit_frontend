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
    <div className="container-lg">
      <Typography
        variant="h3"
        component="h3"
        className="text-[2.5rem] font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
      >
        {t('homepage.diploma.listTitle')}
      </Typography>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Swiper
          className="py-10 px-1 diplom-list "
          modules={[Pagination]}
          spaceBetween={20}
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
              href="https://muit.makalabox.com/documents/diplom/diplom.pdf"
              className="lg:flex lg:justify-center"
            >
              <Card
                className="transition duration-75 max-w-[420px] min-h-[200px] max-h-[200px] bg-[#f5f5f5] p-4 flex justify-evenly shadow-none rounded-lg  hover:cursor-pointer 
              md:flex-col-reverse md:max-h-full md:gap-10 items-center "
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <Typography
                      variant="h4"
                      className="font-semibold text-[27px] leading-8"
                    >
                      {t('homepage.diploma.bachelor.degree')}
                    </Typography>
                    <Typography className="font-medium ">
                      {t('homepage.diploma.bachelor.description')}
                    </Typography>
                  </div>
                  <Button className="self-start mt-3 shadow-none bg-blue text-white p-1 rounded px-4 font-medium                   lg:self-center">
                    {t('homepage.diploma.buttonText')}
                  </Button>
                </div>
                <img
                  src={Gerb}
                  alt=""
                  className="transition duration-200 max-h-[120px] "
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
              <Card className="transition duration-75 max-w-[420px] min-h-[200px] max-h-[200px] bg-[#f5f5f5] p-4 flex justify-evenly shadow-none rounded-lg  hover:cursor-pointer md:flex-col-reverse md:max-h-full md:gap-10 items-center">
                <div className="flex flex-col justify-between">
                  <div>
                    <Typography
                      variant="h4"
                      className="font-semibold text-[27px] leading-8"
                    >
                      {t('homepage.diploma.master.degree')}
                    </Typography>
                    <Typography className="font-medium ">
                      {t('homepage.diploma.master.description')}
                    </Typography>
                  </div>
                  <Button className="self-start mt-3 shadow-none bg-blue text-white p-1 rounded px-4 font-medium                   lg:self-center">
                    {t('homepage.diploma.buttonText')}
                  </Button>
                </div>
                <img
                  src={Gerb}
                  alt=""
                  className="transition duration-200 max-h-[120px] "
                />
              </Card>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery-3"
              href="https://muit.makalabox.com/documents/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%20%D0%B4%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC.pdf"
              className="lg:flex lg:justify-center"
            >
              <Card className="transition duration-75 max-w-[420px] min-h-[200px] max-h-[200px] bg-[#f5f5f5] p-4 flex justify-evenly shadow-none rounded-lg  hover:cursor-pointer md:flex-col-reverse md:max-h-full md:gap-10 items-center">
                <div className="flex flex-col justify-between">
                  <div>
                    <Typography
                      variant="h4"
                      className="font-semibold text-[27px] leading-8"
                    >
                      {t('homepage.diploma.postgraduate.degree')}
                    </Typography>
                    <Typography className="font-medium ">
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
                  alt=""
                  className="transition duration-200 max-h-[120px] "
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
              <Card className="transition duration-75 max-w-[420px] min-h-[200px] max-h-[200px] bg-[#f5f5f5] p-4 flex justify-evenly shadow-none rounded-lg  hover:cursor-pointer md:flex-col-reverse md:max-h-full md:gap-10 items-center ">
                <div className="flex flex-col justify-between lg:items-center">
                  <div>
                    <Typography
                      variant="h4"
                      className="font-semibold text-[27px] leading-8"
                    >
                      {t('homepage.diploma.diplomaSupplement.title')}
                    </Typography>
                    <Typography className="font-medium ">
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
                  alt=""
                  className="transition duration-200 max-h-[120px] "
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
