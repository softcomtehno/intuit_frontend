import axios from 'axios'

const API_URL = 'http://intuit.makalabox.com/api/'

export const getStaffQuery = () => {
  return axios.get(`${API_URL}university/staffs/`)
}

export const getStaffDetailsQuery = (string: string) => {
  return axios.get(`${API_URL}university/staffs/${string}/`)
}
