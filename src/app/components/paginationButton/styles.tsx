import { colors } from '@/app/styles/colors';
import { ButtonText } from '@/app/styles/fontstyle';
import styled, { css, keyframes } from 'styled-components';

interface WrapButton {
  isAnglebutton?: any;
  size?: any;
  iconSize?: any;
  disabled?: any;
}

const Button = styled.button<WrapButton>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  padding: 8px 20px;
  background-color: #fff;
  color: ${colors.title};
  cursor: pointer;
  width: inherit;
  white-space: nowrap;
  border: 1px solid #dfe5f1;
  box-shadow: 4px 4px 18px -32px rgba(102, 94, 154, 0.08);
  transition: all 0.3s;
  a {
    ${ButtonText};
  }
  &:hover {
    background: #635bff;
    color: ${colors.white};
    svg {
      path {
        stroke: #fff;
      }
    }
  }
  ${(props) =>
    props.isAnglebutton &&
    css`
      flex-direction: row-reverse;
      gap: 8px;
    `}
`;

export { Button };
