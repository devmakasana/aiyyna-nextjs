import { Heading1, Body1, Body2 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';

const Heading = styled.div`
  color: #1c132d;
  text-align: center;
  ${Heading1}
  @media (max-width:449px) {
    font-size: 36px;
    line-height: normal;
  }
`;

const Description = styled.div`
  color: #5a5a6c;
  text-align: center;
  margin-top: 15px;
  ${Body1}
  @media (max-width:449px) {
    ${Body2}
  }
`;

export { Heading, Description };
