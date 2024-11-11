import { NewsCard, newsQueries } from '~entities/news'
import DescriptionCard from './../../pages/institute/ui/Description.ui'
import { Typography } from '@mui/material'

export const NewsList = () => {
  const { data, isError, isLoading } = newsQueries.useGetNews()
  console.log(data?.data)

  return (
    <div>
      <Typography variant="h3" component="div" className="font-semibold">
        Новости
      </Typography>
      <div className="my-10 flex justify-between">
        {data?.data.slice(0, 3).map((news, index) => (
          <NewsCard
            image={news.banner}
            title={news.title}
            description={news.description}
            slug={news.slug}
          />
        ))}
      </div>
    </div>
  )
}
