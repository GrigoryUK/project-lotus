'use client';

import { ChangeEvent, useState } from 'react';

import {
  PeopleFooter,
  PeopleHeader,
  PeopleLayout,
  PeopleList,
} from '@/entities/People';
import { useGetPeopleQuery } from '@/entities/People/api/peopleApi';

export default function HomePage() {
  const [searchTitle, setSearchTitle] = useState('');

  const { data, isLoading, isError } = useGetPeopleQuery({
    search: searchTitle,
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(event.target.value);
  };

  return (
    <main>
      <PeopleLayout>
        <PeopleHeader value={searchTitle} onChange={onChange} />
        <PeopleList isError={isError} isLoading={isLoading} data={data} />
        <PeopleFooter data={data} />
      </PeopleLayout>
    </main>
  );
}
