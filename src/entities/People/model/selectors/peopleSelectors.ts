import { StateSchema } from '@/providers/StoreProvider';

export const valueSearch = (state: StateSchema) =>
  state?.searchPeople?.valueSearch || '';
