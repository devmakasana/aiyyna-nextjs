import { colors } from '@/app/styles/colors';
import { ButtonText } from '@/app/styles/fontstyle';
import ButtonGroup from 'antd/es/button/button-group';
import styled, { css, keyframes } from 'styled-components';

interface WrapButton {
  secondary: any;
  width?: any;
}

const Buttons = styled.button<WrapButton>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  padding: 12px 26px;
  background-color: #635bff;
  color: ${colors.white};
  cursor: pointer;
  width: inherit;
  white-space: nowrap;
  border: none;
  a {
    ${ButtonText};
  }
  &:hover {
    background: #3d34ef;
  }
  ${(props) =>
    props.secondary &&
    css`
      color: ${colors.title};
      background-color: rgba(0, 0, 0, 0);
      border: none;
      a {
        &:hover {
          color: ${colors.primary};
        }
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0);
        border: none;
      }
    `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
`;

export { Buttons };
