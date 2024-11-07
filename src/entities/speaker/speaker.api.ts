import axios from 'axios'

const API_URL = 'https://intuit.makalabox.com/api/'

export const getSpeakerQuery = () => {
  return axios.get(`${API_URL}university/student-speakers`)
}
export const getSpeakerDetailsQuery = (id: number) => {
  return axios.get(`${API_URL}university/student-speakers/${id}`)
}
