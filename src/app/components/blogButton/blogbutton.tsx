'use client';
import React from 'react';
import { Content } from './styles';
import Paginationbutton from '../paginationButton/paginationbutton';

export default function Blogbutton() {
  return (
    <div>
      <Content>
        <Paginationbutton
          title='Previous'
          isAnglebutton='true'
          iconName='pre-arrow'
          iconSize='14'
          iconViewBox='0 0 14 14'
        />
        <Paginationbutton title='Next' iconName='next-arrow' iconSize='14' iconViewBox='0 0 14 14' />
      </Content>
    </div>
  );
}
