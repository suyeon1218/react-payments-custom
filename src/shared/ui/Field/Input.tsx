import { ChangeEvent, ComponentProps, forwardRef, useState } from 'react';

import * as S from './Field.style';

export interface InputProps extends ComponentProps<'input'> {
  styleType?: 'fill' | 'outline' | 'flushed' | 'ghost';
  onlyNumber?: boolean;
  onComplete?: (event?: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { styleType = 'fill', onlyNumber = false, onComplete, onChange, ...props },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState('');

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      const { maxLength } = props;
      const { value } = event.target;
      const maxLengthNumber = Number(maxLength);

      if (onlyNumber && isNaN(Number(value))) {
        return;
      }
      if (value.length === maxLengthNumber) {
        onComplete && onComplete(event);
      }
      setInputValue(value);
      onChange && onChange(event);
    };

    return (
      <S.Input
        styleType={styleType}
        ref={ref}
        value={inputValue}
        onChange={handleChangeInput}
        {...props}
      />
    );
  },
);

export default Input;
