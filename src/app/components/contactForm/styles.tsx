import styled from 'styled-components';
const Main = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
`;

const Content = styled.div`
  border-radius: 12px;
  border: 1px solid #dfe5f1;
  background: #fff;
  box-shadow: 2px 2px 40px 0px rgba(102, 94, 154, 0.08);
  max-width: 588px;
  width: 100;
`;

const Form = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.div`
  color: #5a5a6c;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  span {
    color: #ff5b60;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: #393945;
  font-family: '__Inter_20951f', '__Inter_Fallback_20951f';
  height: 139px;
  resize: none;

  &::placeholder {
    color: #bab8c0;
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
