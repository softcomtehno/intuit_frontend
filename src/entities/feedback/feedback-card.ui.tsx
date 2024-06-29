import { Avatar, Card, Typography } from '@mui/material'

// Swiper

export const FeedbackCard = ({ text }) => {
  return (
    <Card className="  p-5 flex flex-col gap-10 bg-[#ECEDF0] rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-none justify-between ">
      <div className="flex items-center gap-5 ">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div>
          <Typography variant="h5" className="font-bold">
            Владимир Жеданов
          </Typography>
          <Typography variant="h6">Факультет юриспруденции</Typography>
        </div>
      </div>
      <Typography variant="body1" className="text-sm">
        {text}
      </Typography>
    </Card>
  )
}
