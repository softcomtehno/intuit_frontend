import { useQuery } from '@tanstack/react-query'
<<<<<<< HEAD
import { getSortStaffs, getStaffDetailsQuery, getStaffLevels, getStaffQuery } from './staff.api'
=======
import {
  getSortStaffs,
  getStaffDetailsQuery,
  getStaffQuery,
  getStaffPositions,
} from './staff.api'
>>>>>>> 2a74b0f53c03da37660cff222ab77700eeb6bf23

const keys = {
  root: () => ['staff'],
  staff: (slug: string) => [...keys.root(), 'bySlug', slug] as const,
<<<<<<< HEAD
  level: () => [...keys.root(), 'level'] as const,
=======
  position: () => [keys.root(), 'positions'] as const,
>>>>>>> 2a74b0f53c03da37660cff222ab77700eeb6bf23
}

export const useGetStaffs = () => {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getStaffQuery,
  })
}

export const useSoftStaffs = (faculty: string) => {
  return useQuery({
    queryKey: [...keys.root(), faculty],
    queryFn: () => getSortStaffs(faculty),
  })
}

export const useGetStaffDetail = (slug: string) => {
  return useQuery({
    queryKey: keys.staff(slug),
    queryFn: () => getStaffDetailsQuery(slug),
  })
}

<<<<<<< HEAD
export const useGetStaffLevels = () => {
  return useQuery({
    queryKey: keys.level(),
    queryFn: () => getStaffLevels()
  })
}
=======
export const useGetStaffPositions = () => {
  return useQuery({
    queryKey: keys.position(),
    queryFn: getStaffPositions,
  })
}
>>>>>>> 2a74b0f53c03da37660cff222ab77700eeb6bf23
