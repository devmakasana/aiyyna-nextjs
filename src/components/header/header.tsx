import React from 'react';
import { Container, Links, Logo, MainHeader, Maindiv, Rightheader } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/button';
import logo from '../../../public/images/aiyynalogo.svg';

interface Props {

}

const Header: React.FC<Props> = (Props) => {
  return (
    <>
      <MainHeader>
        <Container>
          <Maindiv>
            <Logo>
              {' '}
              <Image src={logo} alt='aiyynalogo' width={145} height={42} />
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
          </Maindiv>
        </Container>
      </MainHeader>
    </>
  );
};

export default Header;
