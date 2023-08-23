import { Body1, Heading1 } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
`;

const Heading = styled.div`
  color: #1c132d;
  text-align: center;
  ${Heading1}
`;

const Description = styled.div`
  color: #5a5a6c;
  text-align: center;
  ${Body1}
`;

const Subcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Form = styled.div`
  text-align: -webkit-center;
`;
export { Content, Description, Heading, Subcontent, Form };
