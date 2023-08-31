import { colors } from '@/app/styles/colors';
import { Heading2 } from '@/app/styles/fontstyle';
import styled from 'styled-components';
const MainContent = styled.div`
  background-image: url('../../whiteCta.png');
  background-size: cover;
  @media (max-width: 449px) {
    background-image: none;
  }
`;
const Main = styled.div`
  background-image: url('../../footercta-background.svg');
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  @media (max-width: 449px) {
    background-image: url('footercta-mobile.svg');
  }
`;

const Content = styled.div`
  padding-top: 105px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  position: relative;
  @media (max-width: 449px) {
    padding-bottom: 80px;
    padding-top: 40px;
  }
`;

const Description = styled.div`
  color: ${colors.title};
  ${Heading2}
  text-align: center;
  max-width: 800px;
  width: 100%;
  @media (max-width: 449px) {
    font-size: 26px;
    line-height: normal;
  }
`;
export { Main, Content, Description, MainContent };
