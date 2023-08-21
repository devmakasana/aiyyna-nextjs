import styled from 'styled-components';

const Main = styled.div`
  background-image: url('IntegrationsBG.svg');
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
  padding: 80px 0 80px 72px;
`;
const Title = styled.div`
  color: #635bff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Description = styled.div`
  color: #1c132d;
  font-size: 36px;
  font-weight: 600;
`;

const Leftcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
