import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

type StaffCardProps = {
  name: string;
  position: string;
  image: string;
};

const StaffCard: React.FC<StaffCardProps> = ({ name, position, image }) => {
  return (
    <Card className="flex bg-white min-w-[500px] max-w-[500px] min-h-[240px] max-h-[240px] p-3 shadow-md rounded-md">
      <Box className="flex flex-col">
        <CardContent className="flex flex-col items-start justify-between max-h-[240px] min-h-[240px]">
          <div>
            <Typography
              component="div"
              variant="h5"
              className="text-[22px] font-semibold leading-6 mb-2"
            >
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              className="text-[13px] font-semibold"
            >
              {position}
            </Typography>
          </div>
          <Button
            variant="contained"
            className="shadow-none bg-green px-5"
            size="small"
          >
            Узнать больше
          </Button>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        className="w-[170px] rounded-xl"
        image={image}
        alt={name}
      />
    </Card>
  );
};
export default StaffCard;
