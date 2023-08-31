import { Heading1, Body1 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';

const Heading = styled.div`
  color: #1c132d;
  text-align: center;
  ${Heading1}
`;

const Description = styled.div`
  color: #5a5a6c;
  text-align: center;
  margin-top: 15px;
  ${Body1}
`;

export { Heading, Description };
