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
`;
const Title = styled.div`
   color: ${colors.primary};
  ${SmallText}
  text-transform: uppercase;
`;

const Description = styled.div`
   color: ${colors.title};
  ${Heading2}
`;

const Leftcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 450px;
`;

const Rightcontent = styled.div`
  width: 100%;
  max-width: 900px;
  grid-row-gap: 25px;
  flex-direction: column;
  display: flex;
`;

const Row1 = styled.div`
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  justify-content: flex-end;
  align-items: center;
  justify-items: end;
  padding-right: 23px;
  display: flex;
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
`;
const Subbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Main, Content, Description, Leftcontent, Rightcontent, Title, Mainbox, Row1, Row2, Subbox };
