import { Box, Button, Typography } from "@mui/material"

export const NewsRecomendationCard = ({ title, date }) => {
  return (
    <>
      <Box className="bg-[#F0F2F6] p-5 rounded-lg border-2 border-[#818181]  flex flex-col gap-5">
        <Typography className="font-bold" variant="subtitle1">
          {title}
        </Typography>
        <Box className="flex flex-col items-start gap-2">
          <Typography>{date}</Typography>
          <Button
            variant="contained"
            className="text-white transition-all bg-green hover:scale-105 shadow-sm"
          >
            Читать подробнее
          </Button>
        </Box>
      </Box>
    </>
  )
}
