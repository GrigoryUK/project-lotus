import styles from './PeopleItem.module.scss';

import { cn } from '@/lib/utils';

import { People } from '@/entities/People/model/types/People';

interface PeopleItemProps {
  className?: string;
  people: People;
}

type GenderType = {
  [key: string]: string;
};

const Gender: GenderType = {
  male: 'Мужчина',
  female: 'Женщина',
  'n/a': 'Неизвествно',
};

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
          <span>{people.mass} кг</span>
        </div>
        <div className={styles.PeopleItem__row}>
          <span>Рост:</span>
          <span>{people.height} см</span>
        </div>
        <div className={styles.PeopleItem__row}>
          <span>Пол:</span>
          <span>{Gender[people.gender]}</span>
        </div>
      </div>
    </div>
  );
};
