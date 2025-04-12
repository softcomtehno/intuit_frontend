import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import { degreeQueries } from '~entities/degree';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const DegreeCategory = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    data: degreeData,
    isLoading,
    isError,
  } = degreeQueries.useGetDegrees();

  if (isLoading) {
    return <h1>{t('homepage.loading.loading')}</h1>;
  }
  if (isError) {
    return <h1>{t('homepage.loading.error')}</h1>;
  }

  return (
    <div>
      <Typography
        variant="h3"
        component="h3"
        className="text-[2.5rem] font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
      >
        {t('homepage.degrees.degreeCategory')}
      </Typography>
      <Swiper
        className="py-10 px-1 degree-list text-left"
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          360: { slidesPerView: 1, centeredSlides: true, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3 , spaceBetween:10},
          1024: { slidesPerView: 3.5, spaceBetween: 10 },
        }}
      >
        {degreeData?.data
         .sort((a, b) => a.id - b.id).map((degree) => (
          <SwiperSlide key={degree.id}>
            <Card className="max-w-[350px] text-left p-4 border border-gray text-black/80 transition duration-200 rounded-lg hover:bg-green hover:text-white md:max-w-full">
              <CardActionArea onClick={() => navigate(`degree/${degree.slug}`)}>
                <Typography variant="h6" className="font-bold">
                  {degree.title}
                </Typography>
                <CardContent className="p-0 pt-10 flex items-end justify-between">
                  <div>
                    <Typography
                      variant="subtitle1"
                      className="leading-[20px] text-[16px] font-medium"
                    >
                      {t('homepage.degrees.collegesCount')}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="leading-[20px] text-[16px] font-medium"
                    >
                      {degree.programCount}
                      {' ' + t('homepage.degrees.programCount')}
                    </Typography>
                  </div>
                  <div className="bg-green rounded-full p-2">
                    <AccountBalanceRoundedIcon className="text-white text-[35px]" />
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
