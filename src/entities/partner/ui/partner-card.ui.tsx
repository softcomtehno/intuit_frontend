import { Box } from '@mui/material'

export const PartnerCard = ({ logo, title }) => {
  return (
    <Box className="inline-block mx-4">
      <img src={logo} alt={title} className="h-16" />
    </Box>
  )
}
