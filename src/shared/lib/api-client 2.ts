import axios from 'axios';
import { ENV } from '../../app/constants/env';

export const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 15000,
});

