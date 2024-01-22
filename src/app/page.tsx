'use client';

import { parseAsString, useQueryState } from 'next-usequerystate';
import { ChangeEvent, useCallback, useEffect } from 'react';

import { useAppDispatch } from '@/lib/hooks/useAppDispatch/useAppDispatch';

import {
  PeopleFooter,
  PeopleHeader,
  PeopleLayout,
  PeopleList,
} from '@/entities/People';
import { useGetPeopleQuery } from '@/entities/People/api/peopleApi';
import { peopleActions } from '@/entities/People/model/slices/peopleSlice';

export default function HomePage() {
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useQueryState(
    'search',
    parseAsString.withDefault('').withOptions({
      history: 'push',
    })
  );

  useEffect(() => {
    dispatch(peopleActions.setSearchText(searchText));
  }, [dispatch, searchText]);

  const onChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      await setSearchText(event.target.value);
    },
    [setSearchText]
  );

  const { data, isLoading, isError, isFetching } = useGetPeopleQuery({
    search: searchText,
  });

  return (
    <main>
      <PeopleLayout>
        <PeopleHeader onChange={onChange} value={searchText} />
        <PeopleList
          data={data}
          isError={isError}
          isLoading={isLoading || isFetching}
        />
        <PeopleFooter data={data} />
      </PeopleLayout>
    </main>
  );
}
