'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Bottomcontent,
  Dropbox,
  Dropcontent,
  FirstLine,
  Icon,
  Links,
  Logo,
  MainHeader,
  Maindiv,
  MobileMenu,
  Rightheader,
  SecondLine,
  ThirdLine,
  Topcontent
} from './styles';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/button';
import logo from '../../../../public/images/aiyynalogo.svg';
import { Container } from '@/app/styles/commoncontainer';
import SVGIcon from '../../../../public/assets/svg/SVGIcon';
import { Dropdown } from 'antd';
import router from 'next/router';

interface Props {}

const Header: React.FC<Props> = (Props) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const handleMobileMenu = useCallback(() => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  }, [isOpenMobileMenu]);

  let isScrollPage: boolean;
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  if (clientWindowHeight > 0) {
    isScrollPage = true;
  } else {
    isScrollPage = false;
  }
  return (
    <>
      <MainHeader isScrollPage={isScrollPage}>
        <Container>
          <Maindiv>
            <Logo href={'/'}>
              {' '}
              <Image src={logo} alt='aiyynalogo' width={145} height={42} className='responsivelogo' />
            </Logo>
            <Rightheader>
              <Links>
                <Link href={''} className='link'>
                  Features
                </Link>
                <Link href={'/contact-us'} className='link'>
                  Contact Us
                </Link>
                <Link href={'/blog'} className='link'>
                  Blog
                </Link>
              </Links>
              <Button title='Sign In' secondary href='https://dash.aiyyna.com/login' />
              <Button title='Sign Up' href='https://dash.aiyyna.com/signup' />
            </Rightheader>

            <Dropdown
              trigger={['click']}
              placement='bottomRight'
              transitionName=''
              dropdownRender={() => (
                <>
                  <Dropbox>
                    <Dropcontent>
                      <Topcontent>
                        <Links>
                          <Link href={''} className='link'>
                            Features
                          </Link>
                          <Link href={''} className='link'>
                            About Us
                          </Link>
                          <Link href={''} className='link'>
                            Contact Us
                          </Link>
                        </Links>
                      </Topcontent>
                      <Bottomcontent>
                        <Button title='Sign In' secondary />
                        <Button title='Sign Up' />
                      </Bottomcontent>
                    </Dropcontent>
                  </Dropbox>
                </>
              )}>
              <MobileMenu onClick={handleMobileMenu}>
                <FirstLine isOpenMobileMenu={isOpenMobileMenu}></FirstLine>
                <SecondLine isOpenMobileMenu={isOpenMobileMenu}></SecondLine>
                <ThirdLine isOpenMobileMenu={isOpenMobileMenu}></ThirdLine>
              </MobileMenu>
            </Dropdown>
          </Maindiv>
        </Container>
      </MainHeader>
    </>
  );
};

export default Header;
