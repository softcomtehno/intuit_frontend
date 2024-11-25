import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import { staffTypes } from '..';
import { useNavigate } from 'react-router-dom';

export const StaffCard = ({ name, description, image, slug }: staffTypes.Staff) => {
  const navigate = useNavigate();
  console.log(image, 'image');

  return (
    <div onClick={() => navigate(`teachers/${slug}`)} className='cursor-pointer'>
      <Card className=" bg-white min-w-[500px] max-w-[500px] min-h-[220px] max-h-[240px] p-3 shadow-md rounded-md   md:min-w-[300px] md:max-h-full ">
        <div className="flex mih-h-[140px] max-h-[140px]">
          <CardMedia
            component="img"
            className="max-w-[110px] min-h-[140px] max-h-[140px] rounded-xl"
            image={image}
            alt={name}
          />
          <CardContent className="flex flex-col justify-between  mih-h-[140px] max-h-[140px] p-2 px-4">
            <Typography
              component="div"
              variant="h5"
              className="text-[20px] font-semibold leading-6  md:text-center"
            >
              {name}
            </Typography>

            {/* <Button
              variant="contained"
              className="shadow-none self-start bg-green px-5"
              size="small"
            >
              Узнать больше
            </Button> */}
          </CardContent>
        </div>
        <Divider className="my-3" />
        <div>
          <Typography
            variant="h2"
            component="div"
            className="text-[16px] font-semibold md:text-center"
          >
            {description}
          </Typography>
        </div>
      </Card>
    </div>
  );
};
