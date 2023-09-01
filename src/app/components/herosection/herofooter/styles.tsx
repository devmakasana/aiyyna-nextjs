import { colors } from '@/app/styles/colors';
import { Body1 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';
const Content = styled.div`
  padding-top: 35px;
  position: relative;
  z-index: 1;
  /* padding-bottom: 29px; */
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
  @media (max-width: 449px) {
    gap: 24px;
  }
`;

const Title = styled.div`
  color: ${colors.body};
  ${Body1}
  @media (max-width:449px) {
    font-size: 14px;
    line-height: normal;
  }
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
  @media (max-width: 449px) {
    grid-row-gap: 18px;
    grid-column-gap: 27px;

    .svg-first {
      width: 42px;
      height: 24px;
    }
    .svg-second {
      width: 89px;
      height: 24px;
    }
    .svg-third {
      width: 76px;
      height: 24px;
    }
    .svg-forth {
      width: 90px;
      height: 24px;
    }
    .svg-fifth {
      width: 57px;
      height: 24px;
    }
    .svg-sixth {
      width: 80px;
      height: 24px;
    }
  }
`;
export { Maindiv, Title, Content, Icons };
