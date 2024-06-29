import { Box, Button, Card, Typography } from '@mui/material'
import { ChevronRightRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export const ProfessionCard = ({ degree, faculties, title, url }) => {
  return (
    <>
      <Card
        variant="outlined"
        className="flex flex-col justify-between mt-10 w-1/3 h-72 bg-[#f7f9fd] p-10 hover:bg-green transition-all prof-card border-[#cfd3d8] rounded-xl cursor-pointer"
      >
        <Box className="flex flex-col gap-5">
          <Typography className=" prof-card__text transition-all">
            {degree} / {faculties}
          </Typography>
          <Typography className=" prof-card__text transition-all">
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
            className="border-green text-green prof-card__btn_last transition-all border-green"
          >
            Поступить
          </Button>
        </Box>
      </Card>
    </>
  )
}
