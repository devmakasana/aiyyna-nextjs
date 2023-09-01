import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  gap: 120px;
  width: 100%;
  align-items: center;
  padding-top: 154px;
  padding-bottom: 50px;
  @media (max-width: 449px) {
    flex-direction: column;
    gap: 40px;
    padding-bottom: 60px;
    padding-top: 126px;
    align-items: flex-start;
  }
`;

const Main = styled.div``;

const Left = styled.div`
  width: 50%;
  @media (max-width: 449px) {
    width: 100%;
    max-width: 345px;
  }
`;

const Right = styled.div`
  width: 50%;
  @media (max-width: 449px) {
    width: 100%;
  }
`;
export { Content, Left, Right, Main };
