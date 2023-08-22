import React, { useCallback, useMemo, useState } from 'react';
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

interface Props {}

const Header: React.FC<Props> = (Props) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const handleMobileMenu = useCallback(() => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  }, [isOpenMobileMenu]);

  return (
    <>
      <MainHeader>
        <Container>
          <Maindiv>
            <Logo>
              {' '}
              <Image src={logo} alt='aiyynalogo' width={145} height={42} className='responsivelogo' />
            </Logo>
            <Rightheader>
              <Links>
                <Link href={''} className='link'>
                  Features
                </Link>
                <Link href={''} className='link'>
                  Contact Us
                </Link>
                <Link href={''} className='link'>
                  Blog
                </Link>
              </Links>
              <Button title='Sign In' secondary />
              <Button title='Sign Up' />
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