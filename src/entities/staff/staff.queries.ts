import { useQuery } from '@tanstack/react-query'
import { getStaffQuery } from './staff.api'

const keys = {
  root: () => ['staff'],
}

export const useGetStaffs = () => {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getStaffQuery,
  })
}
