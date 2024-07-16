import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import { degreeQueries } from '~entities/degree'
import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export const DegreeCategory = () => {
  const navigate = useNavigate()
  const { data: degreeData, isLoading, isError } = degreeQueries.useGetDegrees()
  return (
    <div>
      <Typography variant="h3" component="div" className="font-semibold">
        Направления обучения
      </Typography>
      <Swiper
        className=" py-10 px-1 degree-list"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3.5}
        pagination={{ clickable: true }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
      >
        {degreeData?.data.map((degree) => (
          <SwiperSlide>
            <Card className=" max-w-[300px] p-4 border border-gray text-black/80 transition duration-200 rounded-lg hover:bg-green hover:text-white md:max-w-full">
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
                      2 колледжа
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="leading-[20px] text-[16px] font-medium"
                    >
                      {degree.programCount} направлений
                    </Typography>
                  </div>
                  <div className="bg-green rounded-full p-2">
                    <AccountBalanceRoundedIcon className="text-white text-[35px] " />
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
