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

  @media (max-width: 449px) {
    padding-top: 60px;
  }
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
  @media (max-width: 449px) {
    margin-top: 12px;
    font-size: 26px;
    text-align: center;
    max-width: 345px;
    width: 100%;
  }
`;

export { Main, Content, Heading, Subheading };
