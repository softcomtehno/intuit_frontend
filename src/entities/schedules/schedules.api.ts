import axios from "axios";

const API_URL = import.meta.env.VITE_BILIMTRACK_API_URL as string;

export const getEduLevel = async () => {
  const response = await axios.get(`${API_URL}/education-levels/`);
  return response.data;
};

export const getEduCourses = async () => {
  const response = await axios.get(`${API_URL}/courses/`);
  return response.data;
};

export const getGroups = async () => {
  const response = await axios.get(`${API_URL}/groups/`);
  return response.data;
};

export const getGroupsDetails = async (slug: string) => {
  const response = await axios.get(`${API_URL}/groups/${slug}/schedule/`);
  return response.data;
};

// ticher
export const getTeachers = async () => {
  const { data } = await axios.get(`${API_URL}/teachers`, {
    params: { organization: 1 },
  });
  return data;
};

export const getTeacherDetails = async (slug: string) => {
  const response = await axios.get(`${API_URL}/teachers/${slug}/schedule/`);
  return response.data;
};
