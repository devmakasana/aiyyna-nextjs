import { colors } from '@/app/styles/colors';
import { Body2, Heading2 } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Main = styled.div`
  border-radius: 12px;
  border: 1px solid #dfe5f1;
  background: #fff;
  box-shadow: 2px 2px 40px 0px rgba(102, 94, 154, 0.08);
  width: 100%;
  max-width: 500px;
`;
const Content = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 449px) {
    padding: 40px 24px;
  }
`;
const Above = styled.div`
  text-align: center;
  padding-top: 10px;
  @media (max-width: 449px) {
    .image-card {
      width: 150px;
      height: 150px;
    }
    padding-top: 30px;
  }
`;

const Below = styled.div`
  padding-bottom: 10px;
  @media (max-width: 449px) {
    padding-bottom: 30px;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 449px) {
    align-items: center;
  }
`;
const Title = styled.div`
  ${Heading2};
  color: ${colors.title};
  text-align: center;
  @media (max-width: 449px) {
    font-size: 26px;
    line-height: normal;
  }
`;
const Heading = styled.div`
  ${Body2};
  color: ${colors.body};
  text-align: center;
  @media (max-width: 449px) {
    max-width: 297px;
    width: 100%;
  }
`;

export { Main, Content, Below, Above, Description, Title, Heading };
