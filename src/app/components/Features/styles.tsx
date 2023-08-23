import { colors } from '@/app/styles/colors';
import { Heading2, SmallText } from '@/app/styles/fontstyle';
import styled from 'styled-components';
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  padding-top: 91px;
  /* padding-bottom: 120px; */
  @media screen and (max-width: 767px) {
    padding-top: 80px;
    /* padding-bottom: 80px; */
  }
`;
const Topcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
const Bottomcontent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
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
`;
export { Content, Topcontent, Bottomcontent, Title, Subtitle };
