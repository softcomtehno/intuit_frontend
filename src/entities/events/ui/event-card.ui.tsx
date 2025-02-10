import { Card, Typography } from '@mui/material'
import { eventTypes } from '..'

export const EventCard = ({ banner, title }: eventTypes.Event) => {
  return (
    <Card className="bg-[#ECEDF0] bg-opacity-50 min-w-64 h-24  mx-2 p-10 flex  items-center justify-center gap-3 rounded-xl shadow-none">
      <img src={banner} alt={title} className="h-12 w-12 rounded-full " />
      <Typography variant="body1" className="font-bold uppercase text-[12px]">
        {title}
      </Typography>
    </Card>
  )
}
