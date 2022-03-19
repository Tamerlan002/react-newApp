import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import ShadowTitle from "../../../components/titles/shadowTitle";
import { languageModule, Languages } from "../../../helpers/languages";
// import Title from "../../components/titles/Title";
// import { newsData } from "../../../utilities/data";
import "./singleNews.scss";

const SingleNews = () => {
  // const [data] = useState(newsData);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api.get(`news/${id}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error))

  }, [])


  const getTranslatedTitle = (title) => {
    let currentLanguage = languageModule.getCurrentLanguage();
    if (currentLanguage === Languages.EN) return data.title_en;
    if (currentLanguage === Languages.RU) return data.title_ru;
    if (currentLanguage === Languages.TR) return data.title_tr;
  }

  const getTranslatedDesc = (desc) => {
    let currentLanguage = languageModule.getCurrentLanguage();
    if (currentLanguage === Languages.EN) return data.desc_en;
    if (currentLanguage === Languages.RU) return data.desc_ru;
    if (currentLanguage === Languages.TR) return data.desc_tr;
  }




  return (
    <div className="singleNews">
      <ShadowTitle text="News ." />

      <div className="single-news container">
        <div className="single-news-section">
          <div className="d-flex pt-2">
            <p
              className="ifo-frame text-light"
              style={{ background: "rgb(2, 44, 67)" }}
            >
              IFO CREATIVE
            </p>
            <p className="ifo-frame">JUNE 04. 2021</p>
          </div>
          <div className="c">
            <h1 className="title">{getTranslatedTitle(data)}</h1>
            <div className="my-5">
              <img className="w-100" src={data.cover_img} alt="news" />
            </div>
            <p className="description">{getTranslatedDesc(data)}</p>
            <div className="news-second-part">
              {/* <h1 className="text-light my-5">{d.secondPart.title}</h1>
              <p className="description">{d.secondPart.description1}</p> */}
              <div className="row pt-3 pb-4">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="detail-image">
                    <img className="w-100" src={data.img1} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="detail-image">
                    <img className="w-100" src={data.img2} />
                  </div>
                </div>
              </div>
              {/* <p className="description my-5">{d.secondPart.description2}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SingleNews;
