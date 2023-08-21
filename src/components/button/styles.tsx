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
  color: #ffffff;
  cursor: pointer;
  width: inherit;
  white-space: nowrap;
  border: none;
  a {
    font-family: '__Inter_20951f', '__Inter_Fallback_20951f';
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  &:hover {
    background: #3d34ef;
  }
  ${(props) =>
    props.secondary &&
    css`
      color: #1c132d;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      a {
        &:hover {
          color: #635bff;
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
