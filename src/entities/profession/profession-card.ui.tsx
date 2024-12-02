import { Box, Button, Card, Typography } from '@mui/material';
import { ChevronRightRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const ProfessionCard = ({ degree, faculties, title, url }) => {
  return (
    <Link to={`/specialization/${url}`}>
      <Card
        variant="outlined"
  
        className="w-[400px] max-h-[270px] h-[270px] flex flex-col justify-between bg-[#f7f9fd] p-5 hover:bg-green transition-all prof-card border-[#cfd3d8] rounded-xl cursor-pointer sm:w-[350px] sm:h-[300px] md:w-full"
      >
        <Box className="flex flex-col gap-2">
          <Typography
            variant="subtitle2"
            className="text-sm text-gray-700 prof-card__text transition-all"
          >
            {degree} / {capitalizeFirstLetter(faculties)}
          </Typography>
          <Typography
            variant="h6"
            className="text-lg font-semibold text-black prof-card__text transition-all"
          >
            {title}
          </Typography>
        </Box>
        <Box className="flex gap-5 mt-auto">
          <Link to={`/specialization/${url}`}>
            <Button
              variant="outlined"
              className="bg-green text-white border-green prof-card__btn_first transition-all text-sm"
              endIcon={<ChevronRightRounded />}
            >
              Подробнее
            </Button>
          </Link>
          {/* <Button
            variant="outlined"
            className="text-green prof-card__btn_last transition-all border-green text-sm"
          >
            Поступить
          </Button> */}
        </Box>
      </Card>
    </Link>
  );
};
