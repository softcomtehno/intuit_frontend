import { useQuery } from '@tanstack/react-query'
import { getSpeakerQuery } from './speaker.api'

const keys = {
  root: () => ['speaker'],
}

export const useGetSpeakers = () => {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getSpeakerQuery,
  })
}
