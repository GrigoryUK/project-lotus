import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import 'isomorphic-fetch';

import { SERVER_URL } from '@/constant/env';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  // eslint-disable-next-line unused-imports/no-unused-vars
  endpoints: (builder) => ({}),
});
