import styled from 'styled-components';

const MainHeader = styled.div`
  z-index: 99;
  background-color: rgba(0, 0, 0, 0);
  padding-top: 30px;
`;
const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  height: 42px;
`;

const Rightheader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  padding: 2px 20px 2px 0;
  border-right: 1px solid#BAB8C0;
  .link {
    color: #1c132d;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export {  Logo, MainHeader, Maindiv, Rightheader, Links };
