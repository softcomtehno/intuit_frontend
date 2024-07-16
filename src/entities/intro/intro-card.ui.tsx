import { Box, Button, Typography } from '@mui/material'

export const IntroCard = ({ title, img, description }) => {
  return (
    <>
      <section
        className="container h-[500px] w-full bg-no-repeat bg-center bg-cover rounded-xl flex flex-col justify-between p-10 md:bg-right "
        style={{ backgroundImage: `url(${img})` }}
      >
        <Typography
          variant="h1"
          className="font-bold text-white text-[70px] max-w-[750px] sm:text-[40px] md:text-center md:text-[50px]"
        >
          {title}
        </Typography>

        <Box className="flex flex-col gap-5">
          <Typography
            variant="body1"
            className="text-white text-xl max-w-[550px] font-bold md:text-center"
          >
            {description}
          </Typography>
          <Button
            variant="contained"
            size="large"
            className="bg-green shadow-none self-start md:mx-auto"
          >
            Подобрать программу
          </Button>
        </Box>
      </section>
    </>
  )
}
