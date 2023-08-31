import { colors } from '@/app/styles/colors';
import { Body2, InputTitle } from '@/app/styles/fontstyle';
import styled, { css } from 'styled-components';

interface Props {
  placeholder?: any;
  width?: any;
  inpercentwidth?: any;
  hasError?: any;
}
const Maindiv = styled.div<Props>`
  position: relative;
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
  border: 1px solid #dfe5f1;
  width: 100%;
  outline: 0px;
  background: #fff;
  border-radius: 4px;
  color: ${colors.title};
  ${Body2}

  &::placeholder {
    color: ${colors.gray};
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
    ${(props) =>
      props.hasError &&
      css`
        border: 1px solid #FF5B60;
      `}
  }

  &:active {
    border: 1px solid #c5c8cd;
  }
  &:focus {
    border: 1px solid #635bff;
  }
  ${(props) =>
    props.hasError &&
    css`
      border: 1px solid #FF5B60 !important;
      &:focus {
        outline: none;
      }
    `}
  svg {
    stroke: 'red';
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

const Error = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  right: 0;
  top: -25px;
  p {
    ${InputTitle}
    color: ${colors.red};
    white-space: nowrap;
  }
`;
export { Inputbox, Maindiv, Inputs, Error };
