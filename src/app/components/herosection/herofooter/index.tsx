import React from 'react';
import { Content, Icons, Maindiv, Title } from './styles';
import SVGIcon from '../../../../../public/assets/svg/SVGIcon';
import Image from 'next/image';

export default function Herofooter() {
  return (
    <Content>
      <Maindiv>
        <Title>Trusted By Innovative Companies Worldwide</Title>
        <Icons>
          <SVGIcon name='logoipsum1' width='74' height='42' viewBox='0 0 74 42' fill='none' />
          <SVGIcon name='logoipsum2' width='157' height='42' viewBox='0 0 157 42' fill='none' />
          <SVGIcon name='logoipsum3' width='135' height='42' viewBox='0 0 135 42' fill='none' />
          <Image src={'/images/logoipsum4.svg'} alt='logoipsum' width={159} height={42} />
          <SVGIcon name='logoipsum5' width='101' height='42' viewBox='0 0 101 42' fill='none' />
          <SVGIcon name='logoipsum6' width='141' height='42' viewBox='0 0 141 42' fill='none' />
        </Icons>
      </Maindiv>
    </Content>
  );
}
