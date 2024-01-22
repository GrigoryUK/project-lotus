import { ChangeEvent } from 'react';

import styles from './PeopleHeader.module.scss';

import { cn } from '@/lib/utils';

import { Input } from '@/components';

import IconSearch from '~/svg/icon-search.svg';

interface PeopleHeaderProps {
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const PeopleHeader = (props: PeopleHeaderProps): JSX.Element => {
  const { className, value, onChange, ...rest } = props;

  return (
    <div className={cn(styles.PeopleHeader, className)} {...rest}>
      <IconSearch />
      <Input
        variant='search'
        onChange={onChange}
        value={value}
        placeholder='Поиск персонажей Star Wars'
        type='text'
      />
    </div>
  );
};
