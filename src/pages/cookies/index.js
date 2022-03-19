import React from 'react';
import ShadowTitle from '../../components/titles/shadowTitle';
import Title from '../../components/titles/Title';

import './styles.scss';



const CookiesPage = () => {
  return (
    <div className='cookies'>
      <ShadowTitle text="Cookies ." />
      <Title text="Cookies.." />
    </div>
  )
}

export default CookiesPage;