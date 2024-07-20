import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { articleTypes } from '..';

type ArticleCardProps = { article: articleTypes.Article };

export const ArticleCard = (props: ArticleCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };
  return (
    <Card className="shadow-none border border-gray" sx={{ maxWidth: 365 }}>
      <a
        href={`https://makalabox.com/article/${props.article.id}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            className="max-h-[220px]"
            image={props.article.photo}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-[18px] font-semibold"
            >
              {props.article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {truncateText(props.article.subtitle, 120)}
              <a
                href={`https://makalabox.com/article/${props.article.id}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Читать дальше
              </a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
};
