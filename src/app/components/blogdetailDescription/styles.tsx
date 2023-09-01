import { colors } from '@/app/styles/colors';
import { Body1 } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Points = styled.div`
  max-width: 1124px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 30px;
  line-height: 38px;
  font-weight: 600;
  color: ${colors.title};
  padding: 0 72px 28px;
    @media (max-width: 449px) {
  padding: 0 24px 28px;
font-size: 26px;
  line-height: 33px;

font-weight: 600;
  }
`;
export { Points, Title };
