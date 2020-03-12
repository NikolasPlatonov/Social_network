import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f3e6d36f-0df2-4751-8cd2-009d16f38d6d',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  getMyAuth() {
    return axiosInstance.get(`auth/me`).then(response => {
      return response.data;
    });
  },

  getUserProfile(userId) {
    return axiosInstance.get(`profile/` + userId).then(response => {
      return response.data;
    });
  },

  unFollowUser(userId) {
    return axiosInstance.delete(`follow/${userId}`).then(response => {
      return response.data;
    });
  },

  followUser(userId) {
    return axiosInstance.post(`follow/${userId}`, {}).then(response => {
      return response.data;
    });
  },
};
