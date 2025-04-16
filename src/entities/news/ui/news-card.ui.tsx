import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material'
import { Link } from 'react-router-dom'

interface NewsCardProps {
  image: string
  title: string
  description: string
  slug: string
}

export const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  slug,
}) => {
  // const truncatedDescription =
  //   description.length > 120 ? description.slice(0, 120) + '...' : description;

  const truncatedTitle = title.length > 65 ? title.slice(0, 65) + '...' : title

  return (
    <Link to={`/news/${slug}`}>
      <Card className="shadow-none border border-gray max-w-sm h-[450px] flex flex-col justify-between">
        <CardActionArea className="h-full flex flex-col">
          <CardMedia
            className="h-60"
            component="img"
            image={image}
            title={truncatedTitle}
          />
          <CardContent className="flex flex-col justify-between flex-grow">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-base font-bold line-clamp-2"
            >
              {truncatedTitle}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="line-clamp-3"
            >
              <div
                className="text-justify line-clamp-2"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
