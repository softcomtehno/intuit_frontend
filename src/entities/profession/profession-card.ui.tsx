import { Box, Button, Card, Typography } from '@mui/material';
import { ChevronRightRounded } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Notebook } from 'lucide-react';

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const ProfessionCard = ({ degree, faculties, title, url }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/specialization/${url}`)}>
<Card
  variant="outlined"
  className="relative w-[400px] max-h-[250px] min-h-[250px] flex flex-col justify-between p-5 hover:bg-green transition-all prof-card border-[#cfd3d8] rounded-xs cursor-pointer 
  md:w-[350px] md:h-[300px]  bg-cover bg-center text-white hover:shadow-lg hover:shadow-green/50"
  style={
    {
      background: "#138a6a",
      backgroundImage: "linear-gradient(347deg,rgba(19, 138, 106, 0.89) 0%, rgba(107, 232, 199, 1) 99%)"
    }
  }
>
  <div className="absolute inset-0 bg-green/30 backdrop-blur-sm z-0 rounded-xs" />
  <Box className="relative z-10 flex items-start gap-2">
    <div>
    <Typography
      variant="subtitle2"
      className="text-sm  transition-all"
    >
      {degree} / {capitalizeFirstLetter(faculties)}
    </Typography>
    <Typography
      variant="h6"
      className="text-lg font-semibold  transition-all"
    >
      {title}
    </Typography>
    </div>
    <div className='bg-green/80 p-2  rounded-full '>
    <BookOpen />
    </div>
  </Box>

  <Box className="relative z-10 flex gap-5 mt-auto">
    <Link to={`/specialization/${url}`}>
      <Button
        variant="outlined"
        className="bg-white border-none text-green border-blue  transition-all text-sm"
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
