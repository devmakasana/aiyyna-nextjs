import { styled } from 'styled-components';
const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;
const Leftdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Rightdiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  color: #1c132d;
  font-size: 28px;
  font-weight: 500;
`;
const Description = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  color: #5a5a6c;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
`;

const Points = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
`;
export { Maindiv, Leftdiv, Rightdiv, Title, Description, Points };
