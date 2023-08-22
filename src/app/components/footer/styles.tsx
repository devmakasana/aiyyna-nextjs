import styled from 'styled-components';
import Link from 'next/link';

const Main = styled.div`
  background: #1c132d;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  align-items: center;
`;
const Logo = styled(Link)`
  cursor: pointer;
`;
const Right = styled.div`
  display: flex;
  gap: 60px;
  color: #bab8c0;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;
const Rightfooter = styled(Link)`
  transition: all 0.3s;
  &:hover {
    color: #fff;
  }
`;

const Last = styled(Link)`
  transition: all 0.3s;
  &:hover {
    color: #fff;
  }
`;

export { Main, Content, Logo, Right, Rightfooter, Last };
