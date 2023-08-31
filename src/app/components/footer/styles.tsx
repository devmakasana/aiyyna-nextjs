import styled from 'styled-components';
import Link from 'next/link';
import { Body2 } from '@/app/styles/fontstyle';
import { colors } from '@/app/styles/colors';

const Main = styled.div`
  background: #1c132d;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  align-items: center;
  @media (max-width: 449px) {
    flex-direction: column;
    padding: 40px 0;
    gap: 24px;
  }
`;
const Logo = styled(Link)`
  cursor: pointer;
  .logo-icon {
    width: 130px;
    height: 38px;
  }
`;
const Right = styled.div`
  display: flex;
  gap: 60px;
  color: ${colors.gray};
  ${Body2}
  @media (max-width:449px) {
    gap: 24px;
  }
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
