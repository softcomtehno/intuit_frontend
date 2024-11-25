import axios from 'axios'

const API_URL = 'https://intuit.makalabox.com/api/'

export const getSpecializationDetail = (slug: string) => {
  return axios.get(`${API_URL}university/programs/${slug}`)
}
