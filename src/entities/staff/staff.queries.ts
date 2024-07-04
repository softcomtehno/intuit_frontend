import { useQuery } from '@tanstack/react-query'
import { getStaffDetailsQuery, getStaffQuery } from './staff.api'

const keys = {
  root: () => ['staff'],
  staff: (slug: string) => [...keys.root(), 'bySlug', slug] as const,
}

export const useGetStaffs = () => {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getStaffQuery,
  })
}
export const useGetStaffDetail = (slug: string) => {
  return useQuery({
    queryKey: keys.staff(slug),
    queryFn: () => getStaffDetailsQuery(slug),
  })
}
