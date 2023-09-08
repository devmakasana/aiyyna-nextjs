'use client';
import React from 'react';
import { ButtonContent } from './styles';
import Paginationbutton from '../paginationButton/paginationbutton';

export default function Blogbutton() {
  return (
    <div>
      <ButtonContent>
        <Paginationbutton
          title='Previous'
          isAnglebutton='true'
          iconName='pre-arrow'
          iconSize='14'
          iconViewBox='0 0 14 14'
        />
        <Paginationbutton title='Next' iconName='next-arrow' iconSize='14' iconViewBox='0 0 14 14' />
      </ButtonContent>
    </div>
  );
}
