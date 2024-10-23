import { Card, Typography } from '@mui/material'
import { Partner } from '../partner.types'

export const PartnerCard = ({ logo, title }: Partner) => {
  return (
    <Card className="bg-[#ECEDF0] w-64 h-24  mx-2 flex  items-center justify-center gap-3 rounded-xl shadow-none">
      <img src={logo} alt={title} className="h-12 w-12 rounded-full " />
      <Typography variant="body1" className="font-bold uppercase">
        {title}
      </Typography>
    </Card>
  )
}
