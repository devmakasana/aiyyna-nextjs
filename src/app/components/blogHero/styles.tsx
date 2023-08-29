import { colors } from '@/app/styles/colors';
import { Heading1 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';

const Title = styled.div`
  padding: 80px 0;
  color: ${colors.title};
  ${Heading1}
  text-align: center;
`;
export { Title };
