import axios from "axios";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShadowTitle from "../../components/titles/shadowTitle";
import Title from "../../components/titles/Title";
// import { newsInfo } from "../../utilities/news";
import "./styles.scss";
import { api } from '../../api/api';
import { getCurrentMonth, getCurrentTime } from "../../helpers/dateTime";
import { languageModule, Languages } from '../../helpers/languages/';

const NewsPage: FC = () => {
  // const [data] = useState(newsInfo);
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL_NEWS");

  const getData = useCallback(() => {
    api.get(`/news`)
      .then(res => {
        setData(res.data)
      }
      )
      .catch(err => console.log(err))
  })


  useEffect(() => {
    getData()
  }, [])


  const getTranslatedTitle = (item) => {
    let currentLanguage = languageModule.getCurrentLanguage();
    if (currentLanguage === Languages.EN) return item.title_en;
    if (currentLanguage === Languages.RU) return item.title_ru;
    if (currentLanguage === Languages.TR) return item.title_tr;
  }

  const getTranslatedCategory = (item) => {
    let currentLanguage = languageModule.getCurrentLanguage();
    if (currentLanguage === Languages.EN) return item.category.type_en;
    if (currentLanguage === Languages.RU) return item.category.type_ru;
    if (currentLanguage === Languages.TR) return item.category.type_tr;
  }

  const onSelectedCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  // const test = data.map(d => {
  //   console.log(getTranslatedTitle(d))
  // })

  const onFilterNews = (items, filter) => {
    switch (filter) {
      case 'IFO CORPORATION':
        return items.filter(item => item.category.type === filter);
      case 'IFO CREATIVE':
        return items.filter(item => item.category.type === filter);
      case 'IFO COMPANY':
        return items.filter(item => item.category.type === filter);
      case 'IFO CLOTHING':
        return items.filter(item => item.category.type === filter);
      case 'OTHER':
        return items.filter(item => item.category.type === filter);
      default:
        return items;
    }
  }

  const filteredNews = onFilterNews(data, selectedCategory);

  return (
    <>
      <div className="news">
        <ShadowTitle text="News ." />
        <div className="News container">
          <div className="News-text">
            <div className="select d-flex justify-content-between slign-items-center">
              <select
                className="form-select select-ifo mb-3"
                value={selectedCategory}
                onChange={onSelectedCategory}
              >
                <option value="ALL NEWS">
                  {languageModule.getText("ALL_NEWS")}
                </option>
                <option value="IFO CORPORATION">
                  {languageModule.getText("IFO_CORPORATION")}
                </option>
                <option value="IFO CREATIVE">
                  {languageModule.getText("IFO_CREATIVE")}
                </option>
                <option value="IFO COMPANY">
                  {languageModule.getText("IFO_COMPANY")}
                </option>
                <option value="IFO CLOTHING">
                  {languageModule.getText("IFO_CLOTHING")}
                </option>
                <option value="OTHER">
                  {languageModule.getText("OTHER")}
                </option>
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="title">
              <Title text="We are always thinking.." />
            </div>
            <p className="text-light news-subtitle mb-5">
              Quis nostrud exercitation ullamco laboris.
            </p>
            <div className="news-container row">
              {/* {data.map((d, i) => (
                <div key={i}
                  className="col-lg-6 col-md-6 col-sm-12 col-12  mb-5 single-card">
                  <img style={{ width: "100%" }} src={d.img} alt="" />
                  <div className="d-flex align-items-center mt-4">
                    <p
                      className="text-light ifo-name"
                      style={{ background: `${d.comBgColor}` }}
                    >
                      {d.company}
                    </p>
                    <p className="mx-3 text-light shared-time">{d.time}</p>
                  </div>
                  <h5 className="text-light news-intro">
                    {d.description}
                  </h5>
                  <Link to="singleNews">
                    <button className="cta my-4">
                      <span className="hover-underline-animation"> READ MORE </span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                  </Link>
                </div>
              ))} */}
              {filteredNews.map((d, i) => (
                <div key={i}
                  className="col-lg-6 col-md-6 col-sm-12 col-12  mb-5 single-card" >
                    <div className="images">
                        <img style={{ width: "100%" }} src={d.cover_img} alt="" />

                      </div>
                  <div className="d-flex align-items-center mt-4">
                    <p
                      className="text-light ifo-name"
                      style={{ background: `${d.category.bg_color}` }}
                    >
                      {getTranslatedCategory(d)}
                    </p>
                    <p className="mx-3 text-light shared-time">
                      {`${getCurrentMonth(d.created_at)}${getCurrentTime(d.created_at)}`}
                    </p>
                  </div>
                  <h5 className="text-light news-intro">
                    {getTranslatedTitle(d)}
                  </h5>
                  <Link to={`${d.id}`}>
                    <button className="cta my-4">
                      <span className="hover-underline-animation"> READ MORE </span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
