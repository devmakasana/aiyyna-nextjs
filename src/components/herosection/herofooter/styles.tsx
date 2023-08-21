import { styled } from 'styled-components';
const Content = styled.div`
  padding-top: 35px;
  padding-bottom: 29px;
  margin: 0 auto;
`;
const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  color: #5a5a6c;
  font-size: 18px;
  font-weight: 400;
  line-height: 170%;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;
  justify-content: center;
`;
export { Maindiv, Title, Content, Icons };
