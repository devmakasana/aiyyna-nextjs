import React from 'react';
import { Mainbox, Subbox } from '../styles';
import Image from 'next/image';
interface props {
  imgsrc: string;
  height: number;
  width: number;
}
export default function Iconbox(props: props) {
  return (
    <Mainbox>
      <Subbox>
        <Image src={props.imgsrc} alt='image' width={props.width} height={props.height} />
      </Subbox>
    </Mainbox>
  );
}
