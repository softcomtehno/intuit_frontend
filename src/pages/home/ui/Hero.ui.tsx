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
import { degreeQueries } from '~entities/degree';
import { FacultyCarousel } from './heroCarousel/FacultyCarousel';

export const HomeHero = () => {
  const { t } = useTranslation();
  const {
    data: facultyData,
    isLoading,
    isError,
  } = degreeQueries.useGetDegrees();

  if (isLoading) {
    return <div>{t('loading.loading')}</div>;
  }
  if (isError) {
    return <div>{t('loading.error')}</div>;
  }

  console.log(facultyData?.data, 'facultyData?.data');

  return (
    <section className="r-sm:mx-2 r-sm:h-[360px] mx-5  rounded-md r-sm:mb-16 mb-20 relative overflow-hidden bg-[url('/bg3.png')] bg-cover bg-top ">
      <div className="relative py-5  r-md:py-6 px-4">
        <Container className="z-[100px] max-w-[1440px] md:p-0">
          <div className="flex justify-between items-end md:flex-col mb-[30px]">
            <div className="mb-10 r-md:mb-2 r-md:max-w-2xl max-w-4xl">
              <Typography
                variant="h1"
                className="mt-4 r-md:mt-2  md:mb-4 md:text-lg w-[75%]  text-white font-[900]   text-3xl"
              >
                Выбирай не просто специальность — выбирай будущее с МУИТ
                {/* {t('homepage.title')} */}
              </Typography>
              <p className="mb-20 text-white mt-2 italic ">
                Образование, которое ведёт к реальной работе
              </p>
              <div className="flex flex-wrap max-w-[450px] gap-2 md:hidden">
                {facultyData?.data.map((item, index) => (
                  <Link key={index} to={`/institutes/${item.slug}/`}>
                    <span className=" text-[14px] px-4 hover:cursor-pointer  py-1 border border-white/50 bg-white rounded-full text-black font-bold">
                      {item.title}
                    </span>
                  </Link>
                ))}
                <button className=" text-[14px] px-4 hover:cursor-pointer  py-1  bg-blue   rounded-full text-white font-bold">
                  Помочь с выбором
                </button>
              </div>
            </div>
            <div className="w-[450px] md:w-full flex flex-col items-center">
              <img
                className="r-lg:hidden h-[350px] md:w-full md:h-auto object-cover"
                src="/imagee.png"
                alt="Hero"
              />
            </div>
          </div>
          <div className="mt-[50px]">
            <HeroCarousel />
            {/* <FacultyCarousel /> */}
          </div>
        </Container>
      </div>
    </section>
  );
};
