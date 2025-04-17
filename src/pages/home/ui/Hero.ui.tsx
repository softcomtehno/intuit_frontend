import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { HeroCarousel } from './heroCarousel/HeroCarousel';
import { facultyQueries } from '~entities/faculties';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const HomeHero = () => {
  const { t } = useTranslation();
  const {
    data: facultyData,
    isLoading,
    isError,
  } = facultyQueries.useGetFaculties();

  if (isLoading) {
    return <div>Произошла Ошибка</div>;
  }
  if (isError) {
    return <div>Произошла Ошибка</div>;
  }

  console.log(facultyData?.data, 'facultyData?.data');

  return (
    <section className="r-sm:mx-2 r-sm:h-[360px] mx-5  rounded-md r-sm:mb-16 mb-20 relative overflow-hidden bg-[url('https://i.pinimg.com/736x/a3/60/b5/a360b54df5ce5ed246810e679292af7e.jpg')] bg-cover ">
      <div className="relative py-5  r-md:py-6 px-4">
        <Container className="z-[100px] max-w-[1440px] md:p-0">
          <div className="flex justify-between items-end md:flex-col mb-[30px]">
            <div className="mb-10 r-md:mb-2 r-md:max-w-2xl max-w-4xl">
              <Typography
                variant="h1"
                className="mt-4 r-md:mt-2  md:mb-4 md:text-lg w-[100%]  text-black/70 font-[900]   text-4xl  mb-20"
              >
                {t('homepage.title')}
              </Typography>
              <div className="flex flex-wrap max-w-[600px] gap-y-3 gap-2 md:hidden">
                {facultyData?.data.map((item, index) => (
                  <Link key={index} to={`/institutes/${item.slug}/`}>
                    <span className=" text-[10px] px-3 hover:cursor-pointer  py-2 border border-blue/50 bg-blue/60 rounded-full text-white font-bold">
                      {item.subtitle}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          <div className="w-[450px] md:w-full flex flex-col items-center">
                <img className="r-lg:hidden h-[300px] md:w-full md:h-auto object-cover" src="/imagee.png" alt="Hero" />
                {/* <div className="bg-white/30  rounded-md inset-10 p-2 border border-black/30">
                  <h3 className="text-black/70 ">Мамбеткулов Ормон</h3>
                  <p className="text-xs">
  Мне очень нравится обучение здесь — никаких скучных лекций, только практика! Всё по делу и сразу применимо на практике.
</p>
                </div> */}
            {/* <Swiper
              className="py-10 px-1 bg-transparent review-slide"
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              spaceBetween={20}
            >
              <SwiperSlide className='bg-transparent'>
              </SwiperSlide>
              <SwiperSlide>
                <img className="r-lg:hidden h-[300px] i " src="/ramzan.png" alt="Hero" />
                <div className="bg-white/30  rounded-md inset-10 p-2 border border-black/30">
                  <h3 className="text-black/70 ">Мамбеткулов Ормон</h3>
                  <p className="text-xs">
                    Мне очень нравится как здесь меня учат. Только практика !ю
                  </p>
                </div>
              </SwiperSlide>
            </Swiper> */}
          </div>
          </div>
          <div className="mt-[50px]">
            <HeroCarousel />
          </div>
        </Container>
      </div>
    </section>
  )
}
