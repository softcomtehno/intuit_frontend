import axios from 'axios';

const API_URL = 'https://intuit.makalabox.com/api/university/';

export function getProgramsQuery() {
  return axios.get(`${API_URL}programs/`);
}

export function getProgramBySlugQuery(slug: string) {
  return axios.get(`${API_URL}programs/${slug}/`);
}
