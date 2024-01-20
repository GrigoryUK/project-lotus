import { StateSchema } from '@/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
