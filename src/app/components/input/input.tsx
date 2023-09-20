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
  errorMessage?: string
}

const Input: React.FC<Props> = (Props) => {
  const { placeholder, type = 'text', width, inpercentwidth, onChange, value, maxLength, hasError, errorMessage, ...props } = Props;

  return (
    <>
      <Inputs inpercentwidth={inpercentwidth}>
        <Maindiv>
          {hasError && (
            <Error>
              <SVGIcon name='error-icon' width='16' height='16' viewBox='0 0 16 16' fill='none' />
              <p>{errorMessage}</p>
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
            required={true}
            {...props}
          />
        </Maindiv>
      </Inputs>
    </>
  );
};

export default Input;
