import axios from 'axios';

import { AxiosUtilResponse, ErrorResponse } from '../../types/Responses';

axios.interceptors.request.use(
  (config) => {
    if (config.url) {
      const { origin } = new URL(config.url);
      const allowedOrigins = [process.env.REACT_APP_API_HOSTNAME];
      const token = localStorage.getItem('token');
      if (allowedOrigins.includes(origin) && token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// TODO: This file contains console.error which will be removed in future
export const doJsonRequest = async (
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  url: string,
  body = {},
  headers = {},
): Promise<AxiosUtilResponse> => {
  try {
    const response = await axios({
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        ...headers,
      },
      url,
      data: body,
    });
    const axiosResponse: AxiosUtilResponse = {
      error: false,
      data: response?.data,
    };
    return axiosResponse;
  } catch (err) {
    console.error(err);
    const axiosResponse: AxiosUtilResponse = {
      error: true,
      errorResponse: {
        ...err.response?.data as ErrorResponse,
        status: err.response?.status,
      },
    };
    return axiosResponse;
  }
};
