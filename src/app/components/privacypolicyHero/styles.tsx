import { styled } from 'styled-components';
import { colors } from '@/app/styles/colors';
import { Heading1 } from '@/app/styles/fontstyle';

const Heading = styled.div`
  padding: 80px 0 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  ${Heading1}
  color:${colors.title};
`;

export { Heading, Title };
