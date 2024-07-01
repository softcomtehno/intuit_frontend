import { Box, Typography } from '@mui/material'
import { NewsRecomendationCard } from '~entities/news'
import { NewsRecomendationList } from '~widgets/news-list'

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
          <NewsRecomendationList></NewsRecomendationList>
        </Box>
      </section>
    </>
  )
}
