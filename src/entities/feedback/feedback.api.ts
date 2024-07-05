import axios from 'axios'

const API_URL = 'https://intuit.makalabox.com/api/'

export const getFeedbackQuery = () => {
  return axios.get(`${API_URL}university/student-reviews`)
}
export const getFeedbackDetailsQuery = (id: number) => {
  return axios.get(`${API_URL}university/student-reviews/${id}/`)
}
