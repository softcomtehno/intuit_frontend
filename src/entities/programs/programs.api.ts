import apiClient from '~shared/lib/api/apiClient';

export function getProgramsQuery() {
  return apiClient.get('university/programs/');
}

export function getProgramBySlugQuery(slug: string) {
  return apiClient.get(`university/programs/${slug}/`);
}
