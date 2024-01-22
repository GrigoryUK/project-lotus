import Highlighter from 'react-highlight-words';
import { useSelector } from 'react-redux';

import styles from './PeopleItem.module.scss';

import { cn } from '@/lib/utils';

import { valueSearch } from '@/entities/People/model/selectors/peopleSelectors';
import { People } from '@/entities/People/model/types/people';

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

  const searchText = useSelector(valueSearch);

  return (
    <div className={cn(styles.PeopleItem, className)} {...rest}>
      <div className={styles.PeopleItem__title}>
        <Highlighter
          highlightStyle={{ backgroundColor: '#FFE919', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={people.name ? people.name.toString() : ''}
        />
      </div>
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
