import axios from 'axios';
import { DegreeSchema } from './degree.types';

const API_URL = 'http://intuit.makalabox.com/api/';

export function getDegreeQuery() {
  return axios.get(`${API_URL}university/education-levels/`);
}

export function getDegreeBySlugQuery(slug: string) {
  return axios.get<DegreeSchema>(`${API_URL}university/education-levels/${slug}/`);
}
