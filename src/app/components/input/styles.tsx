import styled, { css } from 'styled-components';

interface Props {
  placeholder?: any;
  width?: any;
  inpercentwidth?: any;
}
const Maindiv = styled.div<Props>`
  position: relative;
  padding: 500px 500px;
`;

const Inputbox = styled.input<Props>`
  appearance: none;
  -webkit-appearance: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button,
  &::-webkit-contacts-auto-fill-button {
    display: none !important;
    -webkit-appearance: none !important;
    margin: 0 !important;
    mask-image: none !important;
    mask-size: 0;
    width: 0;
    height: 0;
  }

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}

  padding: 8px 12px;
  display: inline-block;
  border: 1px solid #DFE5F1;
  width: 100%;
  outline: 0px;
  background: #fff;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: #393945;

  &::placeholder {
    color: #bab8c0;
  }
  &[type='number'] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &:focus-visible {
    border: 1px solid #635bff;
    outline: 3px solid #cfd5f5;
    margin: auto;
    border-radius: 4px;
  }
  &:hover {
    border: 1px solid #c5c8cd;
  }

  &:active {
    border: 1px solid #c5c8cd;
  }
  &:focus {
    border: 1px solid #635bff;
  }

  ${(props) => props.placeholder && css``}
`;

const Inputs = styled.div<Props>`
  ${(props) =>
    props.inpercentwidth &&
    css`
      width: ${props.inpercentwidth}%;
    `}
`;
export { Inputbox, Maindiv, Inputs };
