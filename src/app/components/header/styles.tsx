import { colors } from '@/app/styles/colors';
import { ButtonText } from '@/app/styles/fontstyle';
import Link from 'next/link';
import styled, { css } from 'styled-components';
interface Props {
  isOpenMobileMenu?: any;
  isScrollPage?: any;
  isHeroSection?: any;
  mobile?: boolean;
}
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0 72px;
`;

const MainHeader = styled.div<Props>`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  margin: 0 auto;
  transition: all 0.4s;
  background-color: rgba(0, 0, 0, 0);
  padding-top: 30px;
  @media (max-width: 991px) {
    padding: 14px 0;
  }
  ${(props) =>
    props.isScrollPage &&
    css`
      padding: 16px 0;
      background: #fff;
      box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
    `};
`;
const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .ant-dropdown .ant-dropdown-placement-bottomRight {
    margin-top: 31px;
  }
`;

const Logo = styled(Link)`
  height: 42px;
  @media (max-width: 991px) {
    height: 38px;

    .responsivelogo {
      width: 130px;
      height: 38px;
    }
  }
`;

const Rightheader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 991px) {
    display: none;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  padding: 2px 20px 2px 0;
  border-right: 1px solid#BAB8C0;
  .link {
    color: ${colors.title};
    ${ButtonText}
  }
  .flink {
    color: ${colors.title};
    ${ButtonText}
    cursor: pointer;
  }
  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    border: none;
    gap: 24px;
  }
`;

const Icon = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;
const Dropbox = styled.div`
  width: 343px;
  margin-top: 31px;

  border-radius: 12px;
  border: 1px solid var(--other-boarder, #dfe5f1);
  background: var(--font-white, #fff);
  box-shadow: 0px 0px 20px 0px rgba(10, 10, 46, 0.16);
`;

const Dropcontent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 24px 24px 14px 24px;
`;
const Topcontent = styled.div`
  width: 100%;
  padding-bottom: 24px;
  border-bottom: 1px solid #dfe5f1;
`;

const Bottomcontent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const MobileMenu = styled.div`
  height: 14px;
  width: 22px;
  display: none;
  @media only screen and (max-width: 991px) {
    display: block;
  }
`;
const FirstLine = styled.span<Props>`
  display: block;
  width: 22px;
  height: 2px;
  background-color: #1c132d;
  border-radius: 2px;
  transition: all 300ms;
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isOpenMobileMenu &&
    css`
      transform: translate3d(0px, 6px, 0px) rotateZ(45deg);
    `}
`;
const SecondLine = styled.span<Props>`
  display: block;
  width: 22px;
  height: 2px;
  background-color: #1c132d;
  border-radius: 2px;
  margin-top: 4px;
  margin-bottom: 4px;
  transition: all 300ms;
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isOpenMobileMenu &&
    css`
      opacity: 0;
    `}
`;
const ThirdLine = styled.span<Props>`
  display: block;
  width: 22px;
  height: 2px;
  background-color: #1c132d;
  border-radius: 2px;
  transition: all 300ms;
  transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  ${(props) =>
    props.isOpenMobileMenu &&
    css`
      transform: translate3d(0px, -6px, 0px) rotateZ(-45deg);
    `}
`;
export {
  Logo,
  MainHeader,
  Maindiv,
  Rightheader,
  Links,
  Container,
  Icon,
  Dropbox,
  Topcontent,
  Bottomcontent,
  MobileMenu,
  FirstLine,
  SecondLine,
  ThirdLine,
  Dropcontent
};
