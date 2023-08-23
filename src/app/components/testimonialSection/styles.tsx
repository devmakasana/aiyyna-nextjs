import { colors } from '@/app/styles/colors';
import { Heading2, SmallText } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Main = styled.div`
  background: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
`;
const Heading = styled.div`
  color: ${colors.primary};
  ${SmallText}
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
`;
const Subheading = styled.div`
  color: ${colors.title};
  ${Heading2}
  text-align: center;

  margin-top: 15px;
  @media (max-width: 991px) {
    font-size: 34px;
    line-height: 44px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export { Main, Content, Heading, Subheading };
