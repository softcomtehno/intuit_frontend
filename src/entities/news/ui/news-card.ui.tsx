import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
}) => {
  const truncatedDescription =
    description.length > 130 ? description.slice(0, 130) + '...' : description;

  const truncatedTitle = title.length > 70 ? title.slice(0, 70) + '...' : title;

  return (
    <Card className="shadow-none border  border-gray max-w-sm">
      <CardActionArea>
        <CardMedia
          className="h-60"
          component="img"
          image={image}
          title={truncatedTitle}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-base font-bold"
          >
            {truncatedTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
