import axios from 'axios';
import { FacultySchema } from './faculty.types';

const API_URL = 'https://intuit.makalabox.com/api/';

export function getFaculties() {
  return axios.get(`${API_URL}university/faculties/`);
}

export function getFacultyBySlugQuery(slug: string) {
  return axios.get<FacultySchema>(`${API_URL}university/faculties/${slug}/`);
}
