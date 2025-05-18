import { Box } from '@mui/material'
import Marquee from 'react-fast-marquee'
import { PartnerCard } from '~entities/partner'
import { useTranslation } from 'react-i18next'
import { EventCard, eventQueries, eventTypes } from '~entities/events'
import { Loader } from '~shared/ui/loader'

export const EventList = () => {
  const { t } = useTranslation()

  const {
    data: eventsData,
    isLoading,
    isSuccess,
    isError,
  } = eventQueries.useGetEvents()

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <div>{t('homepage.loading.error')}</div>
  }
  if (isSuccess) {
    return (
      <Box className="w-full overflow-hidden my-10">
        <Marquee
          direction="right"
          speed={100}
          pauseOnHover={true}
          className="mb-3 "
        >
          {eventsData &&
            eventsData.data.map((event: eventTypes.Event) => (
              <EventCard key={event.slug} {...event}></EventCard>
            ))}
        </Marquee>
      </Box>
    )
  }
}
