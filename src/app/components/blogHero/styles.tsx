import { colors } from '@/app/styles/colors';
import { Heading1 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';

const Title = styled.div`
  padding: 154px 0 80px;
  color: ${colors.title};
  ${Heading1}
  text-align: center;
`;
export { Title };
