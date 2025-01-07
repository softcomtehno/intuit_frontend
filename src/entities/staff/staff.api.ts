import apiClient from '~shared/lib/api/apiClient'

export const getStaffQuery = () => {
  return apiClient.get('university/staffs/')
}

export const getStaffDetailsQuery = (string: string) => {
<<<<<<< HEAD
  return apiClient.get(`university/staffs/${string}/`);
};

export const getSortStaffs = (faculty:string) => {
  const params = new URLSearchParams();
=======
  return apiClient.get(`university/staffs/${string}/`)
}
>>>>>>> 2a74b0f53c03da37660cff222ab77700eeb6bf23

export const getSortStaffs = (faculty: string) => {
  const params = new URLSearchParams()
  if (faculty) {
    params.append('faculty', faculty)
  }
  return apiClient.get(`university/staffs/?${params.toString()}`)
}

<<<<<<< HEAD
  return apiClient.get(`university/staffs/?${params.toString()}`);
};

export const getStaffLevels = () =>{
  return apiClient.get('university/staffs/positions/')
}
=======
export const getStaffPositions = () => {
  return apiClient.get('university/positions/')
}
>>>>>>> 2a74b0f53c03da37660cff222ab77700eeb6bf23
