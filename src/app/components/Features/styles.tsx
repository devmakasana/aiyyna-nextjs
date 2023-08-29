import { colors } from '@/app/styles/colors';
import { Heading2, SmallText } from '@/app/styles/fontstyle';
import styled from 'styled-components';
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
  /* padding-bottom: 120px; */
  @media screen and (max-width: 767px) {
    padding-top: 80px;
    /* padding-bottom: 80px; */
  }
  @media (max-width: 449px) {
    padding-top: 60px;
    gap: 40px;
  }
`;
const Topcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  @media (max-width: 449px) {
    gap: 12px;
  }
`;
const Bottomcontent = styled.div`
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 449px) {
    grid-template-columns: 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
`;
const Title = styled.div`
  color: ${colors.primary};
  ${SmallText};
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const Subtitle = styled.div`
  color: ${colors.title};
  ${Heading2}

  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 30px;
    line-height: 40px;
  }

  @media screen and (max-width: 991px) {
    font-size: 34px;
    line-height: 44px;
  }
  @media (max-width: 449px) {
    font-size: 26px;
    line-height: normal;
  }
`;
export { Content, Topcontent, Bottomcontent, Title, Subtitle };
