import * as axios from 'axios';

export const getUsers = (currentPage, pageSize) => {
  return axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      {
        withCredentials: true,
      }
    )
    .then(response => {
      return response.data;
    });
};

export const getMyAuth = () => {
  return axios
    .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
    .then(response => {
      return response.data;
    });
};

export const getUserProfile = userId => {
  return axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response => {
      return response.data;
    });
};

export const unFollowUser = userId => {
  return axios
    .delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,

      {
        withCredentials: true,
        headers: {
          'API-KEY': 'f3e6d36f-0df2-4751-8cd2-009d16f38d6d',
        },
      }
    )
    .then(response => {
      return response.data;
    });
};

export const followUser = userId => {
  return axios
    .post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},
      {
        withCredentials: true,
        headers: {
          'API-KEY': 'f3e6d36f-0df2-4751-8cd2-009d16f38d6d',
        },
      }
    )
    .then(response => {
      return response.data;
    });
};
