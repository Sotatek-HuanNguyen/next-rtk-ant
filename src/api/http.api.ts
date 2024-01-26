import { ApiError } from '@/api/ApiError';
import { readToken } from '@/services/localStorage.service';
import axios from 'axios';
import { AxiosError } from 'axios';

export const httpApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  config.headers = { ...config.headers, Authorization: `Bearer ${readToken()}` };

  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  throw new ApiError<ApiErrorData>(
    error.response?.data.message || error.message,
    error.response?.data
  );
});

export interface ApiErrorData {
  message: string;
}
