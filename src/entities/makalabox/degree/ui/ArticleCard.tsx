import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { articleTypes } from '..'
import { useNavigate } from 'react-router-dom'

type ArticleCardProps = { article: articleTypes.Article }

export const ArticleCard = (props: ArticleCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  const navigate = useNavigate()

  return (
    <Card className="shadow-none border border-gray" sx={{ maxWidth: 365 }}>
      <div
        className="pointer"
        onClick={() =>
          window.open(
            `https://makalabox.com/article/${props.article.id}/`,
            '_blank',
            'noopener, noreferrer'
          )
        }
        // href={`https://makalabox.com/article/${props.article.id}/`}
        // target="_blank"
        // rel="noopener noreferrer"
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
      </div>
    </Card>
  )
}
