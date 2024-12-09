import { NewsCard, newsQueries } from '~entities/news'
import { Typography, Pagination } from '@mui/material'
import { useState } from 'react'

export const NewsList = () => {
  const { data, isError, isLoading } = newsQueries.useGetNews()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3 

  if (isLoading) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка при загрузке новостей</div>
  if (!data?.data) return <div>Нет данных</div>

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentNews = data.data.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(data.data.length / itemsPerPage)

  return (
    <div>
      <Typography variant="h3" component="div" className="font-semibold">
        Новости
      </Typography>

      <div className="my-10 flex justify-between">
        {currentNews.map((news) => (
          <NewsCard
            key={news.slug}
            image={news.banner}
            title={news.title}
            description={news.description}
            slug={news.slug}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
          className="rounded-lg shadow-md p-2"
          sx={{
            '& .MuiPaginationItem-root.Mui-selected': {
              color: 'white', // Цвет текста для выбранного элемента
              backgroundColor: '#00956F', // Зелёный фон для выбранного элемента
            },
          }}
        />
      </div>
    </div>
  )
}
