import React from 'react';
import { Inputbox, Maindiv, Inputs } from './styles';

interface Props {
  title?: string;
  placeholder: string;
  type: string;
  width?: number;
  inpercentwidth?: number;
  onChange?: any;
  value?: any;
  maxLength?: number;
}

const Input: React.FC<Props> = (Props) => {
  const { placeholder, type = 'text', width, inpercentwidth, onChange, value, maxLength, ...props } = Props;

  return (
    <Inputs inpercentwidth={inpercentwidth}>
      <Maindiv>
        <Inputbox
          placeholder={placeholder}
          type={type}
          width={width}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
          {...props}
        />
      </Maindiv>
    </Inputs>
  );
};

export default Input;
