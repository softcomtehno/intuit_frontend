import { Card, Typography } from '@mui/material'
import { Partner } from '../partner.types'

export const PartnerCard = ({ logo, title }: Partner) => {
  return (
    <Card className="bg-gray w-52 h-40  mx-5 flex flex-col items-center justify-center gap-3">
      <img src={logo} alt={title} className="h-16 w-16 rounded-full" />
      <Typography variant="h6" className="font-bold">
        {title}
      </Typography>
    </Card>
  )
}
