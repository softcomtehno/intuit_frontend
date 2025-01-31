import { Box } from '@mui/material'
import { newsQueries, NewsRecomendationCard } from '~entities/news'

export const NewsRecomendationList = () => {
  const {
    data: newsRecomendationList,
    isLoading,
    isError,
    isSuccess,
  } = newsQueries.useGetNews()
  console.log(newsRecomendationList)

  if (isError) {
    return <div>Error</div>
  }
  if (isLoading) {
    return <div>Loading</div>
  }
  if (isSuccess) {
    return (
      <Box className="flex flex-col gap-10 mt-10 ">
        {newsRecomendationList.data.results &&
          newsRecomendationList.data.results.map((news, index) => {
            if (index <= 4) {
              return (
                <NewsRecomendationCard
                  key={news.id}
                  {...news}
                ></NewsRecomendationCard>
              )
            }
          })}
      </Box>
    )
  }
}
