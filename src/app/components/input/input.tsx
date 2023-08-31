import React from 'react';
import { Inputbox, Maindiv, Inputs, Error } from './styles';
import SVGIcon from '../../../../public/assets/svg/SVGIcon';

interface Props {
  title?: string;
  placeholder: string;
  type: string;
  width?: number;
  inpercentwidth?: number;
  onChange?: any;
  value?: any;
  maxLength?: number;
  hasError?: boolean;
}

const Input: React.FC<Props> = (Props) => {
  const { placeholder, type = 'text', width, inpercentwidth, onChange, value, maxLength, hasError, ...props } = Props;

  return (
    <>
      <Inputs inpercentwidth={inpercentwidth}>
        <Maindiv>
          {hasError && (
            <Error>
              <SVGIcon name='error-icon' width='16' height='17' viewBox='0 0 16 17' fill='none' />
              <p>This is an error message This is an error message.</p>
            </Error>
          )}
          <Inputbox
            placeholder={placeholder}
            type={type}
            width={width}
            onChange={onChange}
            value={value}
            maxLength={maxLength}
            hasError={hasError}
            {...props}
          />
        </Maindiv>
      </Inputs>
    </>
  );
};

export default Input;
