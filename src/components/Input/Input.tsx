import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './Input.module.scss';

import { cn } from '@/lib/utils';

import { Skeleton } from '@/components';

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  classNameSkeleton?: string;
  value?: string | number;
  variant?: 'search' | 'default';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
  readonly?: boolean;
  isLoading?: boolean;
  error?: string;
  type?: string;
  name?: string;
  placeholder?: string;
}

export const Input = (props: InputProps) => {
  const {
    className,
    value,
    type = 'text',
    placeholder,
    variant = 'primary',
    readonly,
    autofocus,
    onChange,
    isLoading,
    classNameSkeleton,
    name,
    error,
    ...rest
  } = props;

  if (isLoading) {
    return <Skeleton className={cn(styles.skeleton, classNameSkeleton)} />;
  }

  return (
    <input
      className={cn(
        styles.Input,
        [
          variant === 'default' && [''],
          variant === 'search' && [styles.Input__search],
        ],
        [error && 'border-red-800'],
        className
      )}
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
      autoFocus={autofocus}
      readOnly={readonly}
      name={name}
      {...rest}
    />
  );
};
