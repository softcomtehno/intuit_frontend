import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { FeedbackVideo } from '~entities/feedback'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/scrollbar'
import { CustomModal } from '~shared/ui/modal'

const news = [
  {
    id: 1,
    title:
      'В «Синергии» прошло итоговое заседание Студенческой корпорации вуза',
    date: '28.06.2024',
  },
  {
    id: 2,
    title:
      'Студент факультета дизайна и рекламы принял участие в проекте Media Direction Group',
    date: '28.06.2024',
  },
  {
    id: 3,
    title:
      '«Синергия» и юридическая компания «Лучший выбор» разработают проекты по повышению правовой культуры в России',
    date: '28.06.2024',
  },
  {
    id: 4,
    title:
      'Читать подробнее «Синергия» и «Росконгресс» сформируют юридический блок бизнес-форума «Мир возможностей»',
    date: '28.06.2024',
  },
  {
    id: 5,
    title: 'Университет «Синергия» представлен на ПМЮФ-2024',
    date: '28.06.2024',
  },
]

const data = {
  title:
    'Студенты факультета кино побывали на мастер-классах фестиваля Godox Cinema Day',
  data: `
  <div>
    <h1>Welcome to React</h1>
    <p>This is an example of using <code>dangerouslySetInnerHTML</code>.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
`,
}

const modalData = [
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    link: 'https://www.youtube.com/embed/U8GVU41W0yc?si=RyvP-CqFgLVV7bWn',
  },
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    link: 'https://www.youtube.com/embed/U8GVU41W0yc?si=RyvP-CqFgLVV7bWn',
  },
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    link: 'https://www.youtube.com/embed/U8GVU41W0yc?si=RyvP-CqFgLVV7bWn',
  },
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    link: 'https://www.youtube.com/embed/U8GVU41W0yc?si=RyvP-CqFgLVV7bWn',
  },
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    link: 'https://www.youtube.com/embed/U8GVU41W0yc?si=RyvP-CqFgLVV7bWn',
  },
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    link: 'https://www.youtube.com/embed/U8GVU41W0yc?si=RyvP-CqFgLVV7bWn',
  },
]
export const NewsPage = () => {
  return (
    <>
      <section className=" grid grid-cols-3 p-10 rounded-md my-10 ">
        <Box className="col-span-2 border-r-2 p-5">
          <Typography variant="h4" className=" ">
            {data.title}
          </Typography>
          <Box className="mt-20">
            <div dangerouslySetInnerHTML={{ __html: data.data }}></div>
          </Box>
        </Box>

        <Box className="col-span-1 p-5">
          <Typography variant="h4">Другие Новости</Typography>
          <Box className="flex flex-col gap-10 mt-10 ">
            {news &&
              news.map((news) => {
                return <NewsCard key={news.id} {...news}></NewsCard>
              })}
          </Box>
        </Box>
      </section>
      <Typography variant="h2">Отзывы</Typography>

      <Box className="p-10 cursor-pointer grid grid-cols-4 gap-5">
        {modalData &&
          modalData.map((item, i) => {
            if (i <= 3) {
              return (
                <div className="flex justify-center ">
                  <FeedbackVideo key={i} {...item}></FeedbackVideo>
                </div>
              )
            }
          })}
      </Box>
    </>
  )
}

export const NewsCard = ({ title, date }) => {
  return (
    <>
      <Box className="bg-[#F0F2F6] p-5 rounded-lg border-2 border-[#818181]  flex flex-col gap-5">
        <Typography className="font-bold" variant="subtitle1">
          {title}
        </Typography>
        <Box className="flex flex-col items-start gap-2">
          <Typography>{date}</Typography>
          <Button
            variant="contained"
            className="text-white transition-all bg-green hover:scale-105 shadow-sm"
          >
            Читать подробнее
          </Button>
        </Box>
      </Box>
    </>
  )
}
