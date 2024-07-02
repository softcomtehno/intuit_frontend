import { Box } from '@mui/material'
import Marquee from 'react-fast-marquee'
import { PartnerCard, partnersQueries } from '~entities/partner'

export const PartnersList = () => {
  const {
    data: partnersData,
    isLoading,
    isSuccess,
    isError,
  } = partnersQueries.useGetPartners()

  console.log(partnersData)
  if (isLoading) {
    return <div>Загрузка</div>
  }
  if (isError) {
    return <div>Ошибка загрузки</div>
  }
  if (isSuccess) {
    return (
      <Box className="w-full overflow-hidden">
        <Marquee direction="left" speed={30} pauseOnHover={true}>
          {partnersData &&
            partnersData.data.map((partner) => (
              <PartnerCard key={partner.id} {...partner}></PartnerCard>
            ))}
        </Marquee>
      </Box>
    )
  }
}
