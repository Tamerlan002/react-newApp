import React, { useState,useEffect } from 'react';
import {ordersImg,partnerProduct} from "../../utilities/datas"
import ShadowTitle from '../../components/titles/shadowTitle';
import Title from '../../components/titles/Title';
import AOS from "aos";
import './styles.scss';
import Slider from 'react-slick';

const PartnersPage = () => {
  const [order,setOrder] = useState(ordersImg);
  const [partner,setPartner] = useState(partnerProduct);

  useEffect(() => {
    AOS.init({
      duration: 1700, //Fade Animation
    });
  }, []);

  // Slider Settings
  var settings = {
    autoplay: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };
  // Slider Settings
  return (
    <div className='partners'>
      <ShadowTitle text="Partners ." />
      <div className="Partners container">
        <div data-aos="zoom-in-down" className="title">
          <Title text="Partners ut laoreet euismod mollis dictumst eget de." />
        </div>
      </div>
      <div className="partners-section container">
        <div className="slider-orders">
          <div className="slider slick-sliders mb-5">
            <div data-aos="zoom-in-down"
              className=" slick-slider pb-4 slick-initialized d-flex justify-content-beetwen"
              dir="ltr"
            >
              <h2>Take a peek at our other projects..</h2>
            </div>
            <Slider {...settings}>
              {
                partner.map(data =>
                  <div key={data.id} className="slider-product">
                    <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    className="product-image">
                      <img className="w-100" src={data.img} alt="" />
                        <div className="product-info">
                          <img className='mb-2 title-img' src={data.title} alt="" />
                          <p>{data.description}</p>
                          <button className="cta mt-4">
                            <span className="hover-underline-animation">
                              VIEW PROJECT
                            </span>
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </button>
                      </div>
                    </div>
                  </div>
                )
              }
            </Slider>
          </div>
          <div className="orders mb-5">
            <h5 data-aos="fade-down" className='mb-5'>Here's some of the other partners we've worked with.</h5>
          <div className="row justify-content-between">
            {
              order.map(data =>
                      <img data-aos="flip-left" key={data.id} className='mt-5' src={data.img} alt="" />
                )
            }
                </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default PartnersPage;