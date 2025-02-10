import { useParams } from 'react-router-dom'
import { eventQueries } from '~entities/events'

export const EventPage = () => {
  const { slug } = useParams()
  const { data, isLoading, isError } = eventQueries.useGetEventDetail(slug)
  return <div>EventPage</div>
}
