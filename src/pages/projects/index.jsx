import React, { FC, useEffect, useState } from "react";
import ShadowTitle from "../../components/titles/shadowTitle";
import Title from "../../components/titles/Title";
import Slider from "react-slick";
import { projectProduct, projectCategories } from '../../utilities/datas';
import "./styles.scss";
import { api } from "../../api/api";
import { languageModule, Languages } from "../../helpers/languages";
import { Link } from "react-router-dom";

const ProjectsPage: FC = () => {
  // const [product] = useState(projectProduct);
  const [products, setProducts] = useState([]);
  const [category] = useState(projectCategories);

  useEffect(() => {
    api.get(`/projects`)
      .then(res => {
        setProducts(res.data)
      }
      )
      .catch(err => console.log(err))
  }, [])

  // console.log(products)

  const getTranslatedTitle = (item) => {
    let currentLanguage = languageModule.getCurrentLanguage();
    if (currentLanguage === Languages.EN) return item.title_en;
    if (currentLanguage === Languages.RU) return item.title_ru;
    if (currentLanguage === Languages.TR) return item.title_tr;
  }

  const getTranslatedDesc = (item) => {
    let currentLanguage = languageModule.getCurrentLanguage();
    if (currentLanguage === Languages.EN) return item.desc_en;
    if (currentLanguage === Languages.RU) return item.desc_ru;
    if (currentLanguage === Languages.TR) return item.desc_tr;
  }

  var settings = {
    infinite: true,
    speed: 500,
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

  return (
    <>
      <div className="projects">
        <ShadowTitle text="Projects ." />
        <div className="Projects container">
          <div className="title">
            <Title text="We create them beautifully and make them come true" />
          </div>
        </div>
        <div className="video-img container-fluid p-0 my-5">
          <img className="w-100" src="/images/video-img.png" alt="" />
        </div>
        <div className="Ifo container mt-5">
          <div className="About">
            <h6 className="mb-5">
              Working with strategy. Working with creativity. These are all pieces
              of a messy puzzle...
            </h6>
            {
              category.map(data => {
                return (
                  <div key={data.id}
                    className={data.id % 2 == 0 ? "ifo-right-side row pb-5" : "ifo-left-side row pb-5"}>
                    <div className="col-lg-6 col-md-12">
                      <div className="ifo-img">
                        <img src={data.img} alt="Ifo Creative" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="ifo-text pt-3">
                        <h3 className="pb-3">{data.subheader}</h3>
                        <p className="pb-4">
                          {data.description}
                        </p>
                        <a href="#">{data.linkTo}</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div className="slick-slider mb-5">
              <div
                className=" slick-slider pb-5 slick-initialized d-flex justify-content-beetwen"
                dir="ltr"
              >
                <h2>Take a peek at our other projects..</h2>
              </div>
              <Slider {...settings}>
                {/* {
                  product.map(data =>
                    <div key={data.id} className="slider-product">
                      <div className="product-image">
                        <img className="w-100" src={data.img} alt="" />
                        <div className="product-info">
                          <h2>{data.title}</h2>
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
                } */}
                {
                  products.map(data =>
                    <div key={data.id} className="slider-product">
                      <div className="product-image">
                        <img className="w-100" src={data.cover_img} alt="" />
                        <div className="product-info">
                          <h2>{getTranslatedTitle(data)}</h2>
                          <p>{getTranslatedDesc(data)}</p>
                          <Link to={`${data.id}`}>
                            <button className="cta mt-4">
                              <span className="hover-underline-animation">
                                VIEW PROJECT
                              </span>
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;