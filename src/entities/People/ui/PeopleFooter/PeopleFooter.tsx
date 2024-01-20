import styles from './PeopleFooter.module.scss';

import { cn } from '@/lib/utils';

import { PeopleResult } from '@/entities/People/model/types/People';

interface PeopleFooterProps {
  className?: string;
  data?: PeopleResult;
}

export const PeopleFooter = (props: PeopleFooterProps): JSX.Element => {
  const { className, data, ...rest } = props;

  return (
    <div className={cn(styles.PeopleFooter, className)} {...rest}>
      <span>результов: {data?.results.length ? data.results.length : '0'}</span>
    </div>
  );
};
