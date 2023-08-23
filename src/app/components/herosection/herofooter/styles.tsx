import { colors } from '@/app/styles/colors';
import { Body1 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';
const Content = styled.div`
  padding-top: 35px;
  padding-bottom: 29px;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`;

const Title = styled.div`
  color: ${colors.body};
  ${Body1}
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    flex-wrap: wrap;
    align-content: space-around;
    display: flex;
  }
  @media screen and (max-width: 767px) {
    grid-column-gap: 40px;
    grid-row-gap: 20px;
  }
`;
export { Maindiv, Title, Content, Icons };
