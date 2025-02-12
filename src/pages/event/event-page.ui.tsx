import { useParams } from 'react-router-dom'
import { eventQueries } from '~entities/events'
import { Typography, Card, CircularProgress, Alert } from '@mui/material'

export const EventPage = () => {
  const { slug } = useParams()
  const { data, isLoading, isError } = eventQueries.useGetEventDetail(slug)

  if (isLoading) return <CircularProgress className="block mx-auto mt-10" />
  if (isError || !data)
    return <Alert severity="error">Ошибка загрузки события</Alert>

  console.log('data', data)

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Card className="p-5 shadow-lg rounded-lg">
        <div
          className="relative w-full h-60 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${data.data.banner})` }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        </div>
        <Typography variant="h4" className="mt-4 font-bold">
          {data.data.title}
        </Typography>
        <Typography
          variant="body1"
          className="mt-2 text-gray-700"
          dangerouslySetInnerHTML={{ __html: data.data.description }}
        />

        <Typography variant="caption" className="mt-2 text-gray-500 block">
          Дата создания: {new Date(data.data.createdAt).toLocaleDateString()}
        </Typography>
      </Card>
    </div>
  )
}
