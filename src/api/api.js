import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': 'f3e6d36f-0df2-4751-8cd2-009d16f38d6d',
  },
});

export const getUsers = (currentPage, pageSize) => {
  return axiosInstance
    .get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data;
    });
};

export const getMyAuth = () => {
  return axiosInstance.get(baseUrl + `auth/me`).then(response => {
    return response.data;
  });
};

export const getUserProfile = userId => {
  return axiosInstance.get(baseUrl + `profile/` + userId).then(response => {
    return response.data;
  });
};

export const unFollowUser = userId => {
  return axiosInstance.delete(baseUrl + `follow/${userId}`).then(response => {
    return response.data;
  });
};

export const followUser = userId => {
  return axiosInstance.post(baseUrl + `follow/${userId}`, {}).then(response => {
    return response.data;
  });
};
