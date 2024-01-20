import axios from 'axios';

import { SERVER_URL } from '@/constant/env';

export const $api = axios.create({
  baseURL: SERVER_URL,
});

$api.interceptors.request.use((config) => {
  return config;
});
