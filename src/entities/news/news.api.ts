import axios from 'axios';
import { FacultySchema } from './news.types';

const API_URL = 'https://intuit.makalabox.com/api/';

export function getNews() {
  return axios.get(`${API_URL}news/posts/`);
}

export function getNewsDetail(slug: string) {
  return axios.get<FacultySchema>(`${API_URL}news/posts/${slug}/`);
}
