import styled from 'styled-components';
const Main = styled.div``;
const Content = styled.div`
  border-radius: 12px;
  border: 1px solid #dfe5f1;
  background: #fff;
  box-shadow: 2px 2px 40px 0px rgba(102, 94, 154, 0.08);
  width: 100%;
  max-width: 588px;
  padding: 40px 100px;
`;

const Subcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 86px;
`;

const Below = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding-bottom: 75px;
`;
const Title = styled.div`
  color: #1c132d;
  text-align: center;
  font-family: 'Euclid Circular B SemiBold';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Description = styled.div`
  color: #5a5a6c;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

export { Main, Content, Subcontent, Below, Title, Description, Logo };
