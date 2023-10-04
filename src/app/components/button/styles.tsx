import { colors } from '@/app/styles/colors';
import { ButtonText } from '@/app/styles/fontstyle';
import ButtonGroup from 'antd/es/button/button-group';
import styled, { css, keyframes } from 'styled-components';

interface WrapButton {
  secondary: any;
  width?: any;
}

interface Prop {
  isLoading: any;
  isDelete: any;
  style: any;
  width: any;
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

const ButtonWrap = styled.div<Prop>`
  position: relative;
  display: inline-block;
  ${(props) =>
    props.isLoading &&
    css`
      &::before {
        position: absolute;
        top: 50%;
        left: calc(50% - 2px);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: white;
        z-index: 2;
        margin-top: 4px;
        -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
        animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;
      }
      ${Buttons} {
        cursor: wait;
        color: transparent;
        &:hover {
          cursor: wait;
        }
        &::before {
          position: absolute;
          top: 50%;
          left: calc(50% - 2px);
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: white;
          z-index: 2;
          margin-top: 4px;
          -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          margin-left: -15px;
        }
        &::after {
          position: absolute;
          top: 50%;
          left: calc(50% - 2px);
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: white;
          z-index: 2;
          margin-top: 4px;
          -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          margin-left: 15px;
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
        }
      }
    `}
  ${(props) =>
    props.style &&
    css`
      &::before {
        background-color: grey;
      }
      ${Buttons} {
        &::before {
          background-color: grey;
        }
        &::after {
          background-color: grey;
        }
      }
    `}
    ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  
`;

const ball = keyframes`
  from {
    -webkit-transform: translateY(0) scaleY(0.8);
    transform: translateY(0) scaleY(0.8);
  }
  to {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
`;

export { Buttons, ButtonWrap, ball };
