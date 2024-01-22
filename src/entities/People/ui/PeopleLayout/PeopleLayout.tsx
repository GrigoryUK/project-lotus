import styles from './PeopleLayout.module.scss';

import { cn } from '@/lib/utils';

interface PeopleLayoutProps {
  className?: string;
  children: React.ReactNode;
}

export const PeopleLayout = (props: PeopleLayoutProps): JSX.Element => {
  const { className, children, ...rest } = props;

  return (
    <div className={cn(styles.PeopleLayout, className)} {...rest}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.PeopleLayout__background}
        src='./images/background.jpg'
        alt='background'
      />
      <div className={styles.PeopleLayout__container}>{children}</div>
    </div>
  );
};
