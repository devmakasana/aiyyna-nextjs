import { colors } from '@/app/styles/colors';
import { Body2, Heading1, Heading2 } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Group = styled.div`
  background: #fff;
  width: 100%;
  max-width: 100%;
`;

const Title = styled.div`
  color: ${colors.title};
  ${Heading1}
  @media (max-width: 449px) {
  ${Heading2}
   
    }
`;
const Description = styled.div`
  color: ${colors.body};
  ${Body2}
  text-align: center;
`;
const Heading = styled.div`
  width: 900px;
  padding: 154px 0 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  @media (max-width: 449px) {
    width: 100%;
    max-width: 100%;
    padding: 126px 0 60px;
  }
`;
export { Group, Title, Description, Heading };
