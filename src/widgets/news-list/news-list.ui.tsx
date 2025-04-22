import { NewsCard, newsQueries } from '~entities/news'
import { Typography, Pagination } from '@mui/material'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { t } from 'i18next'

export const NewsList = ({ id = null }) => {
  const { data, isError, isLoading, isSuccess } = id
    ? newsQueries.useGetNewsInstitutes(id)
    : newsQueries.useGetNews()
  const [currentPage, setCurrentPage] = useState(1)
  const swiperRef = useRef(null)

  if (isLoading) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка при загрузке новостей</div>
  if (!data?.data) return <div>Нет данных</div>

  const totalPages = Math.ceil(data.data.results.length)

  if (isSuccess && data.data.results.length > 0) {
    return (
      <div>
        <Typography variant="h3" component="div" className="font-semibold">
          {t("news-page.news")}
        </Typography>
        <Swiper
          className="my-10"
          modules={[Navigation, SwiperPagination]}
          spaceBetween={20}
          slidesPerView={2.5}
          onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex + 1)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView:3.5,
            },
          }}
        >
          {data.data.results.map((news) => (
            <SwiperSlide key={news.slug}>
              <NewsCard
                image={news.banner}
                title={news.title}
                description={news.description}
                slug={news.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-4">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, page) => {
              setCurrentPage(page)
              swiperRef.current?.slideTo(page - 1)
            }}
            className="rounded-lg shadow-md p-2"
            sx={{
              '& .MuiPaginationItem-root.Mui-selected': {
                color: 'white',
                backgroundColor: '#00956F',
              },
            }}
          />
        </div>
      </div>
    )
  }
}
