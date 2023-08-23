import { colors } from '@/app/styles/colors';
import { Body2, InputTitle } from '@/app/styles/fontstyle';
import styled from 'styled-components';
const Main = styled.div`
  width: 100%;
  max-width: 588px;
`;

const Content = styled.div`
  border-radius: 12px;
  border: 1px solid #dfe5f1;
  background: #fff;
  box-shadow: 2px 2px 40px 0px rgba(102, 94, 154, 0.08);
`;

const Form = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.div`
  color: ${colors.body};
  ${InputTitle}
  span {
    color: ${colors.red};
  }
`;
const First = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Second = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Third = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Textarea = styled.textarea`
  padding: 8px 12px;
  display: inline-block;
  border: 1px solid #dfe5f1;
  width: 100%;
  outline: 0px;
  background: #fff;
  border-radius: 4px;
  color: ${colors.title};
  ${Body2}
  height: 139px;
  resize: none;

  &::placeholder {
    color: ${colors.gray};
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
`;
export { Content, Form, Label, Main, First, Second, Third, Textarea };
