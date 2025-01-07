import { useQuery } from '@tanstack/react-query'
import { getSortStaffs, getStaffDetailsQuery, getStaffLevels, getStaffQuery } from './staff.api'

const keys = {
  root: () => ['staff'],
  staff: (slug: string) => [...keys.root(), 'bySlug', slug] as const,
  level: () => [...keys.root(), 'level'] as const,
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
  });
};

export const useGetStaffDetail = (slug: string) => {
  return useQuery({
    queryKey: keys.staff(slug),
    queryFn: () => getStaffDetailsQuery(slug),
  })
}

export const useGetStaffLevels = () => {
  return useQuery({
    queryKey: keys.level(),
    queryFn: () => getStaffLevels()
  })
}