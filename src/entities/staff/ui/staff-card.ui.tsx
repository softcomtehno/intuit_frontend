import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { staffTypes } from '..';
import { useNavigate } from 'react-router-dom';

export const StaffCard = ({
  name,
  description,
  image,
  slug,
}: staffTypes.Staff) => {
  const navigate = useNavigate();

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <Card
      onClick={() => navigate(`/teachers/${slug}`)}
      className="
      min-w-full max-w-full min-h-[220px] max-h-[240px] md:min-h-[300px] md:max-h-[300px] p-3 shadow-md rounded-md bg-white 
     cursor-pointer "
    >
      <div className="flex mih-h-[140px] max-h-[140px]   ">
        <CardMedia
          component="img"
          className="max-w-[110px] min-h-[150px] max-h-[140px] rounded-xl"
          image={image}
          alt={name}
        />
        <CardContent
          className="flex flex-col text-left justify-between gap-5 mih-h-[150px] max-h-[150px]   p-2 px-4 
          "
        >
          <Typography
            component="div"
            variant="h5"
            className="text-[20px] font-semibold leading-6 "
          >
            {name}
          </Typography>
          <Typography
            variant="h2"
            component="div"
            className="text-[16px] font-semibold"
          >
            {truncateText(description, 100)}
          </Typography>
          <Button
            variant="contained"
            className="shadow-none  self-start bg-green px-5"
            size="small"
          >
            Узнать больше
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};
