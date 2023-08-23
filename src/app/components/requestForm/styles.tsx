import { InputTitle } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Main = styled.div``;

const Content = styled.div`
  border-radius: 12px;
  border: 1px solid #dfe5f1;
  background: #fff;
  box-shadow: 2px 2px 40px 0px rgba(102, 94, 154, 0.08);
  width: 100%;
  max-width: 500px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const First = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Label = styled.div`
  color: #5a5a6c;
  text-align: left;
  ${InputTitle}
  span {
    color: #ff5b60;
  }
`;

export { Main, Content, First, Label };
