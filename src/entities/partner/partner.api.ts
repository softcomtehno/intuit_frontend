import axios from 'axios'

const API_URL = 'http://intuit.makalabox.com/api/'

export const getPartners = () => {
  return axios.get(`${API_URL}university/partners/`)
}
