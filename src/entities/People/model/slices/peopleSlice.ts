import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PeopleSchema } from '@/entities/People/model/types/people';

const initialState: PeopleSchema = {
  valueSearch: '',
};
export const peopleSlice = createSlice({
  name: 'peopleSlice',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.valueSearch = action.payload;
    },
  },
});

export const { actions: peopleActions } = peopleSlice;
export const { reducer: peopleReducer } = peopleSlice;
