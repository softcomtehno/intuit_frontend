import { Box, Button, Card, Typography } from '@mui/material';
import { ChevronRightRounded } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const ProfessionCard = ({ degree, faculties, title, url }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/specialization/${url}`)}>
      <Card
        variant="outlined"
        className="w-[400px] max-h-[250px] min-h-[250px] flex flex-col justify-between  p-5 hover:bg-green transition-all prof-card border-[#cfd3d8] rounded-xs cursor-pointer 
        md:w-[350px] md:h-[300px] "
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
              Узнать больше
            </Button>
          </Link>
        </Box>
      </Card>
    </div>
  );
};
