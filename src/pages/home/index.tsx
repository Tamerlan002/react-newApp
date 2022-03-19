import React, { FC,useEffect } from 'react';
import ShadowTitle from '../../components/titles/shadowTitle';
import Title from '../../components/titles/Title';
import AOS from "aos";

import './styles.scss'

interface Props {

}

const HomePage: FC = (props: Props) => {

  useEffect(() => {
    AOS.init({
      duration: 1700,
    });
  }, []);

  return (
    <div className='home'>
      <ShadowTitle text="Prove Yourself & RISE!" />
      <div className="container d-flex justify-content-center">
      <div className="home-wrapper row">
        <div className="col-lg-6 col-md-12 mb-4">
        <div className="home__slogan pt-5">
          <Title data-aos="fade-down" text="Prove Yourself & RISE!" />
          <p data-aos="fade-up" className="home__slogan--text">Meet with IFO Corporation</p>
        </div>
        </div>
        <div className="col-lg-6 col-md-12">
        <div className="home__logo">
          <div data-aos="flip-right" className="home__logo--wrapper">
            <img className='home__logo--img' src="/images/ifo-logo.png" alt="ifo logo" />
            <img className='home__logo--img1' src="/images/ifo-reverse.png" alt="ifo logo" />
            <div className="home__logo--box item1"></div>
            <div className="home__logo--box item2"></div>
            <div className="home__logo--box item3"></div>
            <div className="home__logo--box item4"></div>
            <div className="home__logo--box item5"></div>
            <div className="home__logo--box item6"></div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomePage