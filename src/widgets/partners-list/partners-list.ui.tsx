import { Box } from '@mui/material'
import Marquee from 'react-fast-marquee'
import { PartnerCard, partnersQueries } from '~entities/partner'
import { useTranslation } from 'react-i18next'

export const PartnersList = () => {
  const { t } = useTranslation()

  const {
    data: partnersData,
    isLoading,
    isSuccess,
    isError,
  } = partnersQueries.useGetPartners()

  console.log(partnersData)
  if (isLoading) {
    return <div>{t('homepage.loading.loading')}</div>
  }
  if (isError) {
    return <div>{t('homepage.loading.error')}</div>
  }
  if (isSuccess) {
    return (
      <Box className="w-full overflow-hidden my-10">
        <Marquee
          direction="left"
          speed={150}
          pauseOnHover={true}
          className="mb-3 "
        >
          {partnersData &&
            partnersData.data.map((partner, i) => {
              if (i % 2 == 0) {
                return <PartnerCard key={partner.id} {...partner}></PartnerCard>
              }
            })}
        </Marquee>

        <Marquee
          direction="right"
          speed={150}
          pauseOnHover={true}
          className="pb-5"
        >
          {partnersData &&
            partnersData.data.map((partner, i) => {
              if (i % 2 == 1) {
                return <PartnerCard key={partner.id} {...partner}></PartnerCard>
              }
            })}
        </Marquee>
      </Box>
    )
  }
}
