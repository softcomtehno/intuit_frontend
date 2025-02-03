import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { staffTypes } from '..'
import { useNavigate } from 'react-router-dom'

export const StaffCard = ({
  name,
  description,
  image,
  slug,
}: staffTypes.Staff) => {
  const navigate = useNavigate()

  // Функция для обрезки текста
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  return (
    <div
      onClick={() => navigate(`teachers/${slug}`)}
      className="cursor-pointer"
    >
      <Card
        className="
      min-w-[500px] max-w-[500px] min-h-[220px] max-h-[240px] p-3 shadow-md rounded-md bg-white 
      lg:max-w-full lg:min-w-full lg:min-h-[400px] lg:max-h-[400px]"
      >
        <div className="flex mih-h-[140px] max-h-[140px] items-center lg:flex-col ">
          <CardMedia
            component="img"
            className="max-w-[110px] min-h-[150px] max-h-[140px] rounded-xl"
            image={image}
            alt={name}
          />
          <CardContent
            className="flex flex-col justify-between gap-5 mih-h-[150px] max-h-[150px] p-2 px-4 
          "
          >
            <Typography
              component="div"
              variant="h5"
              className="text-[20px] font-semibold leading-6 md:text-center"
            >
              {name}
            </Typography>
            <Typography
              variant="h2"
              component="div"
              className="text-[16px] font-semibold lg:text-center"
            >
              {truncateText(description, 100)}
            </Typography>
            <Button
              variant="contained"
              className="shadow-none  self-start bg-green px-5 lg:self-center"
              size="small"
            >
              Узнать больше
            </Button>
          </CardContent>
        </div>
        <div></div>
      </Card>
    </div>
  )
}
