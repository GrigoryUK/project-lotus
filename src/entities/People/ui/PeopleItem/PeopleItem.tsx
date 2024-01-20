import styles from './PeopleItem.module.scss';

import { cn } from '@/lib/utils';

import { People } from '@/entities/People/model/types/People';

interface PeopleItemProps {
  className?: string;
  people: People;
}

export const PeopleItem = (props: PeopleItemProps): JSX.Element => {
  const { className, people, ...rest } = props;

  return (
    <div className={cn(styles.PeopleItem, className)} {...rest}>
      <div className={styles.PeopleItem__title}>{people.name}</div>
      <div className={styles.PeopleItem__info}>
        <div className={styles.PeopleItem__row}>
          <span>Дата рождения:</span>
          <span>{people.birth_year}</span>
        </div>
        <div className={styles.PeopleItem__row}>
          <span>Вес:</span>
          <span>{people.mass}</span>
        </div>
        <div className={styles.PeopleItem__row}>
          <span>Рост:</span>
          <span>{people.height}</span>
        </div>
        <div className={styles.PeopleItem__row}>
          <span>Гендер:</span>
          <span>{people.gender}</span>
        </div>
      </div>
    </div>
  );
};
