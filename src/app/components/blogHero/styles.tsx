import { colors } from '@/app/styles/colors';
import { Heading1, Heading2 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';

const Title = styled.div`
  padding: 154px 0 80px;
  color: ${colors.title};
  ${Heading1}
  text-align: center;
  @media (max-width: 449px) {
    ${Heading2}
    padding: 126px 0 60px;
    
  }
`;
export { Title };
