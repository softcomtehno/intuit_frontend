import { Box, Button, Typography } from '@mui/material'
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
    </>
  )
}

export const NewsCard = ({ title, date }) => {
  return (
    <>
      <Box className="bg-[#F0F2F6] p-5 rounded-lg border-2 border-[#818181]  flex flex-col gap-5">
        <Typography className="font-bold" variant="h6">
          {title}
        </Typography>
        <Box className="flex flex-col items-end">
          <Typography>{date}</Typography>
          <Button
            variant="text"
            className="text-green hover:text-white hover:bg-green"
          >
            Читать подробнее
          </Button>
        </Box>
      </Box>
    </>
  )
}
