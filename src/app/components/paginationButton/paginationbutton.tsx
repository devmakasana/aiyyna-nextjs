import React, { SyntheticEvent } from 'react';
import { Style } from 'util';
import { Button } from './styles';
import SVGIcon from '../../../../public/assets/svg/SVGIcon';

interface Props {
  title?: string;
  onClick?: (e: SyntheticEvent) => void;
  type?: 'reset' | 'submit' | 'button';
  style?: Style;
  id?: string;
  width?: number;
  iconColor?: any;
  strokeWidth?: number;
  iconViewBox?: string;
  iconStyle?: Style;
  iconSize?: string;
  iconName?: string;
  disabled?: boolean;
  secondary?: boolean;
  isAnglebutton?: string;
}

const Paginationbutton: React.FC<Props> = (Props) => {
  const {
    title,
    type,
    onClick,
    style,
    width,
    iconColor,
    iconName,
    strokeWidth,
    iconSize,
    iconViewBox,
    iconStyle,
    disabled,
    secondary,
    isAnglebutton = false,
    ...props
  } = Props;
  return (
    <Button
      onClick={(e: React.SyntheticEvent<Element, Event>) => {
        onClick && onClick(e);
      }}
      type={type}
      isAnglebutton={isAnglebutton}
      {...props}>
      <a>{title || ''}</a>
      {iconName && (
        <SVGIcon
          name={iconName}
          height={iconSize}
          width={iconSize}
          stroke={disabled ? '#90989A' : secondary ? '#000000' : iconColor}
          fill={iconColor}
          strokeWidth={strokeWidth}
          viewBox={iconViewBox}
          style={iconStyle}
        />
      )}
    </Button>
  );
};

export default Paginationbutton;
