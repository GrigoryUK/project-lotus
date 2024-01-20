import { buildSelector } from '@/lib/store';

export const [useCounterValue, getCounterValue] = buildSelector(
  (state) => state.counter.value
);
