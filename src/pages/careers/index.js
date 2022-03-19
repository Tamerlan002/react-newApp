import React, { useState,useEffect } from 'react';
import ShadowTitle from '../../components/titles/shadowTitle';
import Title from '../../components/titles/Title';
import { categoryProduct } from '../../utilities/datas';
import './styles.scss';
import AOS from 'aos';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  const [datas,setDatas] = useState(categoryProduct)
  useEffect(() => {
    AOS.init({
      duration: 1700, //Fade Animation
    });
  }, []);
  return (
    <div className='careers'>
      <ShadowTitle text="Careers ." />
      <div className="Careers container">
        <div className="Careers-text">
          <div data-aos="fade-down" className="title">
            <Title text="Become one of us." />
          </div>
          <p data-aos="zoom-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          { 
      datas.map(data =>(
    <div key={data.id} className="category-executive">
        <span data-aos="zoom-in-down" className='subheader'>{data.subheader}</span>
        <h3 data-aos="fade-down" className='pt-3'> {data.header}</h3>
        <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='about mt-4'>{data.description}</p>
        <div className="apply-here">
          <Link to={data.linkTo}>
          <button data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="cta mt-4">
            <span className="hover-underline-animation"> APPLY HERE </span>
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
          </Link>
        </div>
      </div>
  ))

   }
        
        <div className="query text-center">
            <h2 data-aos="zoom-in-up">Would you like to take a look at our projects?</h2>
            <div className="review">
              <Link to="/projects">
              <button data-aos="flip-left"
     data-aos-easing="ease-out-cubic" className="cta mt-4">
                <span className="hover-underline-animation"> REVIEW PROJECTS </span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </button>
              </Link>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CareersPage;