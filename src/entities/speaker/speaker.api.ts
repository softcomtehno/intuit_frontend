import apiClient from '~shared/lib/api/apiClient';

export const getSpeakerQuery = () => {
  return apiClient.get('university/student-speakers');
};

export const getSpeakerDetailsQuery = (id: number) => {
  return apiClient.get(`university/student-speakers/${id}`);
};
