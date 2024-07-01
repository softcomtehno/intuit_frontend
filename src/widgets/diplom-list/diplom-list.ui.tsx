import { Button, Card, Typography } from '@mui/material';
import Gerb from '../../assets/gerb.svg';
import EUGerb from '../../assets/eugerb.svg';
import Diplom from '../../assets/image_2024-06-30_16-05-01.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { CustomModal } from '~shared/ui/modal';
import { useState } from 'react';

export const DiplomList = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Typography variant="h3" className="font-semibold">
        Твой будущий диплом
      </Typography>
      <Swiper
        className=" py-10 px-1 diplom-list"
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
              <Button
                onClick={() => setActive(true)}
                size="small"
                className="self-start shadow-none bg-blue"
                variant="contained"
              >
                Посмотреть
              </Button>
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
              <Button
                size="small"
                className="self-start shadow-none bg-blue"
                variant="contained"
              >
                Посмотреть
              </Button>
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
              <Button
                size="small"
                className="self-start shadow-none bg-blue"
                variant="contained"
              >
                Посмотреть
              </Button>
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
              <Button
                size="small"
                className="self-start shadow-none bg-blue"
                variant="contained"
              >
                Посмотреть
              </Button>
            </div>
            <img
              src={EUGerb}
              alt=""
              className="transition duration-200  w-[200px] "
            />
          </Card>
        </SwiperSlide>
      </Swiper>

      <CustomModal active={active} setActive={setActive}>
        <div className="max-h-[400px] overflow-y-auto ">
          <img className="min-h-[200px] object-cover" src={Diplom} alt="" />

          <img
            className="min-h-[200px] object-cover mt-10"
            src={Diplom}
            alt=""
          />
        </div>
      </CustomModal>
    </div>
  );
};
