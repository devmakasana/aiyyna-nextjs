import React, { SyntheticEvent } from 'react';
import { ButtonWrap, Buttons } from './styles';
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
  isLoading?: boolean;
  isDelete?: any;
}

const Button: React.FC<Props> = (Props) => {
  const { title, type, onClick, secondary, style, width, isLoading, isDelete, ...props } = Props;
  return (
    <ButtonWrap isLoading={isLoading} width={width} style={style} isDelete={isDelete}>
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
    </ButtonWrap>
  );
};

export default Button;
