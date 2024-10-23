import { Box, Button, Card, Typography } from '@mui/material'
import { ChevronRightRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export const ProfessionCard = ({ degree, faculties, title, url }) => {
  return (
    <Card
      variant="outlined"
      className="min-w-[400px] max-w-[400px] min-h-[250px] flex flex-col justify-between    bg-[#f7f9fd] p-5 hover:bg-green transition-all prof-card border-[#cfd3d8] rounded-xl cursor-pointer sm:min-w-fit"
    >
      <Box className="flex flex-col gap-2">
        <Typography
          variant="subtitle2"
          className=" prof-card__text transition-all"
        >
          {degree} / {faculties}
        </Typography>
        <Typography
          variant="h6"
          className=" prof-card__text transition-all font-meduim"
        >
          {title}
        </Typography>
      </Box>
      <Box className="flex gap-5">
        <Link to={`${url}`}>
          <Button
            variant="outlined"
            className="bg-green text-white border-green prof-card__btn_first transition-all"
            endIcon={<ChevronRightRounded />}
          >
            Подробнее
          </Button>
        </Link>
        <Button
          variant="outlined"
          className="text-green prof-card__btn_last transition-all border-green"
        >
          Поступить
        </Button>
      </Box>
    </Card>
  )
}
