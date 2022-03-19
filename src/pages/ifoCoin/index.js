import React, { useState, useEffect } from "react";
import ShadowTitle from "../../components/titles/shadowTitle";
import Title from "../../components/titles/Title";
import BarChart from "../../components/pieChart/BarChart";
import Countdown from "../../components/countdown/Countdown";
import dateFormat from "dateformat";
import CountUp from "react-countup";
import AOS from "aos";
import { Link } from "react-router-dom";
import "./styles.scss";
import { api } from "../../api/api";
import { languageModule, Languages } from "../../helpers/languages";

const IfoCoinPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1700, //Fade Animation
    });
  }, []);

  const [coinsData, setCoinsData] = useState([]);
  const [coinFieldsData, setCoinFieldsData] = useState([]);
  const [coinFeaturesData, setCoinFeaturesData] = useState([]);
  const [timelinesData, setTimelinesData] = useState([]);

  useEffect(() => {
    api
      .get("/coins")
      .then((res) => setCoinsData(res.data[0]))
      .catch((err) => console.log(err.message));
    api
      .get("/coinfields")
      .then((res) => setCoinFieldsData(res.data))
      .catch((err) => console.log(err.message));
    api
      .get("/coinfeatures")
      .then((res) => setCoinFeaturesData(res.data))
      .catch((err) => console.log(err.message));
    api
      .get("/timelines")
      .then((res) => setTimelinesData(res.data))
      .catch((err) => console.log(err.message));
  }, []);




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

  const getTranslatedFeature = (item) => {
    let currentLanguage = languageModule.getCurrentLanguage();
    if (currentLanguage === Languages.EN) return item.feature_en;
    if (currentLanguage === Languages.RU) return item.feature_ru;
    if (currentLanguage === Languages.TR) return item.feature_tr;
  }

  return (
    <div className="ifoCoin">
      <ShadowTitle text=" . IFO Coin" />
      <div className="Ifo-coin">
        <div className="container d-flex justify-content-center">
          {/* IFO section */}
          <div className="ifo-section">
            {
              <div className="row">
                <div className="col-lg-6">
                  <div data-aos={"fade-right"} duration={2000} className="text">
                    <div className="title">
                      <Title text={getTranslatedTitle(coinsData)} />
                    </div>
                    <p className="mt-3">{getTranslatedDesc(coinsData)}</p>
                    <a href={coinsData.ln_link}>
                      <button className="cta mt-4 mb-5">
                        <span className="hover-underline-animation">
                          VIEV FEATURES
                        </span>
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 image-box">
                  <div data-aos={"flip-right"} className="image">
                    <img src={coinsData.img} alt="" />
                  </div>
                </div>
              </div>
            }
            <div className="ifo-everywhere">
              <div className="row">
                <div data-aos="flip-up" className="col-lg-12 text-center mb-5">
                  <h1>IFO Coin is everywhere..</h1>
                  <h1>Let's take a look at where you can use it.</h1>
                </div>
                {coinFieldsData.map((field) => (
                  <div
                    data-aos={"fade-up"}
                    key={field.id}
                    className="col-lg-4 col-md-4 text-center mb-4"
                  >
                    <img className="mb-3" src={field.img} alt="" />
                    <h3 className="subheader">{getTranslatedTitle(field)}</h3>
                    <p className="description">{getTranslatedDesc(field)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Countdown  */}
      <div className="ifo-countdownpage">
        <div className="container d-flex justify-content-center">
          <div className="countdown text-center">
            <h1 data-aos="fade-right" className="mb-3">
              IFO Coin sale on 20 May
            </h1>
            <p data-aos="zoom-in" className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Countdown />
            <div className="progress-div d-flex my-5">
              <span>$0</span>
              <div style={{ margin: "auto" }} className="progress">
                <div
                  className="progress-bar bg-warning w-75"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <span>$5M</span>
            </div>
            <div className="count mb-4">
              {coinFeaturesData.map((features) => (
                <div
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  key={features.id}
                  className="count-box"
                >
                  <h2 data-aos="fade-down" className="mb-3">{getTranslatedFeature(features)}</h2>
                  <CountUp
                    data-aos="fade-up"
                    start={0}
                    duration={6.5}
                    separator=","
                    end={features.count}
                  />
                </div>
              ))}
            </div>
            <Link to={"/maintenance"}>
              <button
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-center"
                className="cta my-5"
              >
                <span className="hover-underline-animation">
                  PURCHASE COIN NOW
                </span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Pie Bar Chart */}
      <div className="pieChart">
        <div className="container d-flex justify-content-center">
          <div className="chart-section">
            <BarChart />
          </div>
        </div>
      </div>
      {/* Time line Section */}
      <div className="roadMap mt-5">
        <div
          id="roadmap-part"
          className="menu-section roadmap-part position-r ptb-100"
        >
          <div className="container d-flex justify-content-center">
            <div className="map">
              <div className="row mb-5">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="heading-part mb-50 mb-sm-30 mb-xs-20"
                  >
                    <h2 className="main_title">ALLOCATION OF FUNDS</h2>
                    <span className="main_desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </span>
                  </div>
                </div>
              </div>
              <div className="main-roadmap">
                <div className="row">
                  <div className="col-12 mt-3">
                    <div
                      data-aos="fade-right"
                      data-aos-offset="100"
                      data-aos-easing="linear"
                      className="h-border fadeInLeftBig delay2"
                    ></div>
                  </div>
                </div>
                <div className="row n-margin">
                  <div className="w-100">
                    <div id="roadmap-slider" className="roadmap-slider">
                      {timelinesData.map((timelines) => (
                        <div
                          key={timelines.id}
                          className="item n-padding main-box"
                        >
                          <div className="roadmap-box">
                            <div
                              data-aos="flip-left"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="2000"
                              className="date-title delay_4"
                            >
                              {languageModule.getText(dateFormat(`${timelines.created_at}`, "mmmm"))}
                              {dateFormat(
                                `${timelines.created_at}`,
                                " yyyy"
                              )}
                            </div>
                            <div className="w-100 position-r map-graphic">
                              <div className="small-round zoomIn delay_2"></div>
                            </div>
                            <div className="roadmap-detail-box delay_4">
                              <h3 data-aos="fade-down" className="sub-title">
                                {getTranslatedTitle(timelines)}
                              </h3>
                              <p data-aos="fade-up">{getTranslatedDesc(timelines)}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IfoCoinPage;
