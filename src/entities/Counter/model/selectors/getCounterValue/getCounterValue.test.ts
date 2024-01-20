import { StateSchema } from '@/providers/StoreProvider';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue.components', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
