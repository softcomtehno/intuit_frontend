import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material'

interface NewsCardProps {
  image: string
  title: string
  description: string
  link: string
}

export const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Card className="shadow-none border  border-gray max-w-sm">
      <CardActionArea>
        <CardMedia
          className="h-60"
          component="img"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-base font-bold"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <div dangerouslySetInnerHTML={{ __html: description }} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
