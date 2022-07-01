import { ChangeEvent, FC, ReactElement, useCallback } from 'react';
import cn from 'clsx';

import s from './styles.module.scss';

export interface InputProps {
  onChange: (e: ChangeEvent) => void;
  onBlur?: (e: any) => void;
  id: string;
  type?: 'input' | 'textarea';
  value: string;
  color?: 'gray' | 'white';
  placeholder?: string;
  label?: ReactElement | string;
  startIcon?: ReactElement | string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
}

/**
 * @param className
 * @param id
 * @param type
 * @param value
 * @param {(newValue: string) => void} [onChange] - function which will be called when value has been changed
 * @param {'white' | 'gray'} [color = 'gray'] - main color
 * * white - white background
 * * gray - gray background
 * @param {string} [placeholder = ''] - placeholder for input
 * @param {string} [label] - label at the start
 * @param startIcon
 * @param {string | ReactElement} [labelEnd] - label at the end
 * @param {boolean} [loading] - if loading then input has a <Loader /> svg
 * @param {boolean} [disabled] - if input disabled
 * @param inputClassName
 */
export const Input: FC<InputProps> = ({
  className,
  id,
  type = 'input',
  value,
  onChange,
  onBlur,
  label,
  startIcon,
  loading,
  disabled,
  color = 'white',
  placeholder = '',
  inputClassName,
}) => {
  const handleChangeInput = useCallback((e: ChangeEvent) => onChange(e), [onChange]);

  return (
    <div className={cn(s.inputWrapper, className)}>
      {label && (
        <div className={s.labelWrapper}>
          <span className={cn(s.label)}>{label}</span>
        </div>
      )}
      {type === 'input' ? (
        <input
          id={id}
          placeholder={!label ? placeholder : ''}
          value={value}
          disabled={disabled || loading}
          onChange={handleChangeInput}
          onBlur={onBlur}
          className={cn(s.input, s[color], { [s.withIcon]: startIcon || loading }, inputClassName)}
        />
      ) : (
        <textarea
          id={id}
          placeholder={!label ? placeholder : ''}
          value={value}
          disabled={disabled || loading}
          onChange={handleChangeInput}
          onBlur={onBlur}
          className={cn(s.input, s[color], inputClassName)}
        />
      )}
      <span className={cn(s.startIcon)}>{startIcon}</span>
    </div>
  );
};
