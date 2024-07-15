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
import Fancybox from '~widgets/diplom-list/Fancybox';

export const DiplomList = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Typography variant="h3" className="font-semibold">
        Твой будущий диплом
      </Typography>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Swiper
          className=" py-10 px-1 diplom-list"
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={2.5}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%D0%B0.png"
            >
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
                    className="self-start shadow-none bg-blue text-white p-1 rounded px-4 font-medium"
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
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery-2" href="https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%9C%D0%B0%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0.png">
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
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery-3"  href="https://intuit.kg/media/faculty/documents/%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B4%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%B0.pdf">
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
            </a>
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
      </Fancybox>
    </div>
  );
};
