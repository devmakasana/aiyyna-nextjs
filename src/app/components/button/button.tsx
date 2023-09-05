import React, { SyntheticEvent } from 'react';
import { Buttons } from './styles';
import { Style } from 'util';

interface Props {
  title?: string;
  onClick?: (e: SyntheticEvent) => void;
  type?: 'reset' | 'submit' | 'button';
  secondary?: boolean;
  width?: number;
  style?: Style;
  id?: string;
  href?: string;
}

const Button: React.FC<Props> = (Props) => {
  const { title, type, onClick, secondary, style, width, ...props } = Props;
  return (
    <Buttons
      onClick={(e: React.SyntheticEvent<Element, Event>) => {
        onClick && onClick(e);
      }}
      secondary={secondary}
      type={type}
      width={width}
      {...props}>
      <a href={props.href}>{title || ''}</a>
    </Buttons>
  );
};

export default Button;
