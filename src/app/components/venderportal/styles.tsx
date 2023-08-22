import { styled } from 'styled-components';
const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;
const Leftdiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;
const Rightdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Title = styled.div`
  color: #1c132d;
  font-size: 28px;
  font-weight: 500;
`;
const Description = styled.div`
  color: #5a5a6c;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
`;
export { Maindiv, Leftdiv, Rightdiv, Title, Description };
