import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShadowTitle from "../../components/titles/shadowTitle";
import Title from "../../components/titles/Title";
import { languageModule } from "../../helpers/languages";
import { ifoData, adsText, teamData } from "../../utilities/datas";
import AOS from "aos";
import "./styles.scss";

const WhoIsIfoPage = () => {
  const [ifodata, setIfoData] = useState(ifoData);
  const [adsdata, setAdsData] = useState(adsText);
  const [teamdata, setTeamData] = useState(teamData);

  useEffect(() => {
    AOS.init({
      duration: 1700, // Fade Animation
    });
  }, []);
  return (
    <div className="whoisifo">
      <div className="shadow-title">
        <ShadowTitle text="Who is IFO . " />
      </div>
      <div className="WhoIsIfo">
        <div className="Ifo-sec d-flex justify-content-center container mb-5">
          {/* Ifo info Sec  (first sec) */}
          <div className="ifo-info">
            <div data-aos="fade-down" className="title">
              <Title text={languageModule.getText("Who_is_IFO_title")} />
            </div>
            <div className="sub-title py-3 row justify-content-end">
              <div
                data-aos="flip-down"
                className="col-lg-7 col-md-9 col-sm-12 col-12"
              >
                <p>
                  Welcome to IFO– come in, click around, make yourself at home.
                  We’ve left a few essentials for you. If you need anything at
                  all, please let us know.
                </p>
                <p>Enjoy.</p>
                <p>IFO</p>
              </div>
            </div>
          </div>
        </div>
        {/* Video sec */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="ifo-video-section container-fluid p-0"
        >
          <img className="w-100" src="/images/video.png" />
        </div>

        {/* Ifo Section (second sec) */}
        <div className="Ifo-section">
          <div className="d-flex justify-content-center container mb-5">
            <div className="ifo-info">
              {ifodata.map((data) => (
                <div
                  key={data.id}
                  className={
                    data.id === 2 ? "reverse-part row " : "normal-part row "
                  }
                >
                  <div className="col-lg-6 about">
                    <div className="background-title">
                      <h2>{data.title}</h2>
                    </div>
                    <div className="text">
                      <h1 data-aos="zoom-in-up">
                        {data.id}. {data.title}
                      </h1>
                      <p data-aos="zoom-out">{data.description}</p>
                    </div>
                  </div>
                  <div data-aos="flip-left" className="col-lg-6 img">
                    <img src={data.img} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation full Section (third sec) */}
        <div className="ads-section ">
          <div className="container d-flex justify-content-center">
            <div className="ads-info">
              {adsdata.map((data) => (
                <div key={data.id} className="text-center">
                  <h1 data-aos="fade-down" className="ads-title my-5">
                    {data.title}
                  </h1>
                  <div className="home__logo w-100 mb-4">
                    <div data-aos="flip-down" className="home__logo--wrapper">
                      <img
                        className="home__logo--img"
                        src="/images/ifo-logo.png"
                        alt="ifo logo"
                      />
                      <img
                        className="home__logo--img1"
                        src="/images/ifo-reverse.png"
                        alt="ifo logo"
                      />
                      <div className="home__logo--box item1"></div>
                      <div className="home__logo--box item2"></div>
                      <div className="home__logo--box item3"></div>
                      <div className="home__logo--box item4"></div>
                      <div className="home__logo--box item5"></div>
                      <div className="home__logo--box item6"></div>
                    </div>
                  </div>
                  <h5 data-aos="fade-up" className="ads-subtitle mb-5">
                    {data.subTitle}
                  </h5>
                  <p data-aos="fade-up" className="ads-description1 mb-4">
                    {data.description}
                  </p>
                  <img
                    data-aos="flip-right"
                    className="my-5"
                    src="/images/box.png"
                  />
                  <h1 data-aos="fade-up" className="ads-title mt-4">
                    {data.footer.title}
                  </h1>
                  <p data-aos="fade-up" className="ads-description2  my-5">
                    {data.footer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section (fourth sec) */}
        <div className="ifo-team-section">
          <div className="container d-flex justify-content-center">
            <div className="ifo-team-info">
              <div data-aos="zoom-in" className="title">
                <Title text="Nice to meet you :)" />
                <div className="background-title">
                  <h2>Nice to meet you</h2>
                </div>
              </div>
              {teamdata.map((t) => (
                <div key={t.id} className="row mb-5">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <h1 data-aos="flip-up" className="team-position mb-5">
                      {t.position}
                    </h1>
                  </div>
                  {t.team.map((tm) => (
                    <div
                      key={tm.id}
                      className="team-workers mb-5 col-lg-4 col-md-6 col-sm-6"
                    >
                      <img
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1800"
                        className="w-100"
                        src={tm.img}
                      />
                      <p data-aos="zoom-out-left" className="workers-name">
                        {tm.name}
                      </p>
                      <hr data-aos="zoom-out-left" className="hr" />
                    </div>
                  ))}
                </div>
              ))}
              <div className="query d-flex justify-content-center flex-column align-items-center mb-5">
                <h2 data-aos="zoom-in-down" className="mb-4">
                  Do you want to join a team ?
                </h2>
                <div data-aos="zoom-in-up" className="review text-center">
                  <Link to="/careers/category-page">
                    <button className="cta mt-4 mb-5">
                      <span className="hover-underline-animation">REVIEW</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsIfoPage;
