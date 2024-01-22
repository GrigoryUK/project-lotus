'use client';

import styles from './Spinner.module.scss';

const SpinnerVariant = ['primary', 'secondary'] as const;
const SpinnerSize = ['sm', 'md', 'lg'] as const;

// import { FaSpinner } from 'react-icons/fa';

import { cn } from '@/lib/utils';

import IconSpinner from '~/svg/icon-spinner.svg';

interface SpinnerProps {
  className?: string;
  variant?: (typeof SpinnerVariant)[number];
  size?: (typeof SpinnerSize)[number];
}

export const Spinner = (props: SpinnerProps) => {
  const { className, variant = 'primary', size = 'md', ...rest } = props;

  return (
    <div role='status'>
      <IconSpinner
        className={cn(
          styles.Spinner,
          [
            variant === 'primary' && [styles.Spinner__primary],
            variant === 'secondary' && [styles.Spinner__secondary],
          ],
          [
            size === 'sm' && [styles.Spinner__sm],
            size === 'md' && [styles.Spinner__md],
            size === 'lg' && [styles.Spinner__lg],
          ],
          className
        )}
        {...rest}
      />
      <span className='sr-only'>Loading...</span>
    </div>
  );
};
