import { rtkApi } from '@/api/rtkApi';
import { PeopleResult } from '@/entities/People/model/types/people';

const cargoApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPeople: build.query<PeopleResult, { search?: string }>({
      query: (params) => ({
        url: '/people/',
        method: 'GET',
        params: params,
      }),
    }),
  }),
});

export const { useGetPeopleQuery } = cargoApi;
