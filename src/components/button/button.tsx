import React, { SyntheticEvent } from 'react';
import { Buttons } from './styles';
import { Style } from 'util';

interface Props {
  title?: string;
  onClick?: (e: SyntheticEvent) => void;
  type?: 'reset' | 'submit' | 'button';
  size?: string;
  secondary?: boolean;
  width?: number;
  style?: Style;
  buttonwidth?: string;
  id?: string;
}

const Button: React.FC<Props> = (Props) => {
  const {
    title,
    size,
    type,
    onClick,
    secondary,
    width,
    style,
    buttonwidth,
    ...props
  } = Props;
  return (
    <Buttons
      onClick={(e: React.SyntheticEvent<Element, Event>) => {
        onClick && onClick(e);
      }}
      secondary={secondary}
      size={size}
      type={type}
      buttonwidth={width}
      {...props}>
      <a>{title || ''}</a>
    </Buttons>
  );
};

export default Button;
