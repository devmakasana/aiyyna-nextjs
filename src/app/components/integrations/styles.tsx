import { colors } from '@/app/styles/colors';
import { Heading2, SmallText } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Main = styled.div`
  background-image: url('IntegrationsBG.svg');
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  margin-top: 120px;
  @media (max-width: 449px) {
    margin-top: 60px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0;
  .icons {
    width: 100%;
    max-width: 925px;
    grid-row-gap: 25px;
    flex-direction: column;
    align-items: flex-end;
    margin-right: -123px;
    padding-left: 25px;
    display: flex;
  }
  @media (max-width: 449px) {
    flex-direction: column;
    padding: 60px 0;
    gap: 40px;
    .icons {
      max-width: 100%;
      margin-right: 0;
      grid-row-gap: 12px;
    }
  }
`;
const Title = styled.div`
  color: ${colors.primary};
  ${SmallText}
  text-transform: uppercase;
`;

const Description = styled.div`
  color: ${colors.title};
  ${Heading2}
  @media (max-width: 449px) {
    text-align: center;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 33px;
  }
`;

const Leftcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 450px;
  @media (max-width: 449px) {
    align-items: center;
    gap: 12px;
  }
`;

const Rightcontent = styled.div`
  width: 100%;
  max-width: 900px;
  grid-row-gap: 25px;
  flex-direction: column;
  display: flex;
  @media (max-width: 449px) {
    grid-row-gap: 12px;
  }
`;

const Row1 = styled.div`
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  justify-content: flex-end;
  align-items: center;
  justify-items: end;
  padding-right: 23px;
  display: flex;
  @media (max-width: 449px) {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    padding: 0;
  }
`;
const Row2 = styled.div`
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  align-items: center;
  padding-right: 23px;
  display: flex;
  max-width: 900px;
  justify-content: flex-start;
  transform: translate(38px);

  @media (max-width: 449px) {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    margin-right: 0;
    justify-content: flex-end;
  }
`;
const Mainbox = styled.div`
  display: flex;
  width: 160px;
  height: 60px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 0px 14px 0px rgba(102, 94, 154, 0.1);
  @media (max-width: 449px) {
    width: 95px;
    height: 36px;
  }
`;
const Subbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 449px) {
    .logoicon {
      height: 16px;
    }
  }
`;

export { Main, Content, Description, Leftcontent, Rightcontent, Title, Mainbox, Row1, Row2, Subbox };
