import apiClient from '~shared/lib/api/apiClient'

export const getStaffQuery = () => {
  return apiClient.get('university/staffs/')
}

export const getStaffDetailsQuery = (string: string) => {
  return apiClient.get(`university/staffs/${string}/`)
}

export const getStaffPositions = () => {
  return apiClient.get('university/positions/')
}
