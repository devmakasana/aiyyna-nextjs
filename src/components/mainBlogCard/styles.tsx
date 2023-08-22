import styled from 'styled-components';

const Main = styled.div``;

const Content = styled.div`
  display: flex;
  gap: 50px;
`;
const Left = styled.div`
  width: 50%;
  .main-blog {
    width: 100%;
    max-width: 623px;
    border-radius: 10px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
`;
const Datetiltle = styled.div`
  color: #5a5a6c;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
const Heading = styled.div`
  color: #1c132d;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 14px;
`;
const Description = styled.div`
  color: #5a5a6c;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export { Main, Content, Left, Right, Description, Datetiltle, Heading };
