import { Card, Typography } from '@mui/material';
import Gerb from '../../assets/gerb.svg';
import EUGerb from '../../assets/eugerb.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const DiplomList = () => {
  return (
    <div>
      <Typography variant="h3" className="font-semibold">
        Твой будущий диплом
      </Typography>
      <Swiper
        className=" py-10 px-1 staff-list"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2.5}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Card className="transition duration-75 max-w-[500px] max-h-[230px] bg-[#f5f5f5] p-7 flex shadow-none rounded-lg  hover:cursor-pointer ">
            <div className="flex flex-col justify-between">
              <Typography
                variant="h4"
                className="font-semibold text-[30px] leading-8"
              >
                Бакалавриат
              </Typography>
              <Typography className="font-medium">
                Государственный диплом бакалавра
              </Typography>
            </div>
            <img
              src={Gerb}
              alt=""
              className="transition duration-200  w-[200px] "
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="transition duration-75 max-w-[500px] max-h-[230px] bg-[#f5f5f5] p-7 flex shadow-none rounded-lg  hover:cursor-pointer ">
            <div className="flex flex-col justify-between">
              <Typography
                variant="h4"
                className="font-semibold text-[30px] leading-8"
              >
                Магистратура
              </Typography>
              <Typography className="font-medium">
                Государственный диплом магистра
              </Typography>
            </div>
            <img
              src={Gerb}
              alt=""
              className="transition duration-200  w-[200px] "
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="transition duration-75 max-w-[500px] max-h-[230px] bg-[#f5f5f5] p-7 flex shadow-none rounded-lg  hover:cursor-pointer ">
            <div className="flex flex-col justify-between">
              <Typography
                variant="h4"
                className="font-semibold text-[30px] leading-8"
              >
                Аспирантура
              </Typography>
              <Typography className="font-medium">
                Государственный диплом аспиранта
              </Typography>
            </div>
            <img
              src={Gerb}
              alt=""
              className="transition duration-200  w-[200px] "
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="transition duration-75 max-w-[500px] max-h-[230px] bg-[#f5f5f5] p-7 flex shadow-none rounded-lg  hover:cursor-pointer ">
            <div className="flex flex-col justify-between">
              <Typography
                variant="h4"
                className="font-semibold text-[30px] leading-8"
              >
                Diploma Supplement
              </Typography>
              <Typography className="font-medium">
                Приложение к диплому
              </Typography>
            </div>
            <img
              src={EUGerb}
              alt=""
              className="transition duration-200  w-[200px] "
            />
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
