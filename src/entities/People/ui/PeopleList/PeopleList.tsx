import { useAutoAnimate } from '@formkit/auto-animate/react';

import styles from './PeopleList.module.scss';

import { cn } from '@/lib/utils';

import { Spinner } from '@/components';

import { PeopleResult } from '@/entities/People/model/types/People';
import { PeopleItem } from '@/entities/People/ui/PeopleItem/PeopleItem';

interface PeopleListProps {
  className?: string;
  isError: boolean;
  isLoading: boolean;
  data?: PeopleResult;
}

export const PeopleList = (props: PeopleListProps): JSX.Element => {
  const { className, data, isError, isLoading, ...rest } = props;

  const [parent] = useAutoAnimate();

  let state;
  const content = data?.results.map((people) => (
    <PeopleItem key={people.name} people={people} />
  ));

  if (isLoading) {
    state = (
      <div className={styles.PeopleList__center}>
        <Spinner variant='primary' />
      </div>
    ); 
  }

  if (isError) {
    state = (
      <div className={styles.PeopleList__error}>
        <span>Упс что-то пошло не так пререзагрузите страницу</span>
        <button onClick={() => location.reload()}>
          Перезагрузить страницу
        </button>
      </div>
    );
  }

  if (data?.results.length === 0) {
    state = (
      <div className={styles.PeopleList__error}>
        <span>
          По вашему запросу ничего не найдено. Попробуйте ввести другой :)
        </span>
      </div>
    );
  }

  return (
    <div ref={parent} className={cn(styles.PeopleList, className)} {...rest}>
      {state ? state : content}
    </div>
  );
};
