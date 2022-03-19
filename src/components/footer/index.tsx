import React, { FC, useState} from "react";
import {
  AiOutlineBehance,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { api } from "../../api/api";
import swal from "sweetalert";
import { FaFacebookF } from "react-icons/fa";
import { languageModule } from "../../helpers/languages";
import { Link } from "react-router-dom";
import "./styles.scss";

interface Props {}

const Footer: FC = (props: Props) => {

  const [subscribeData, setSubscribeData] = useState({
    email: '',
  })

  const handleSubmitSubs = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    api.post('/subscribers/',subscribeData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    if (subscribeData.email != "") {
      swal({
      className: "span",
      title: "Thanks!",
      text: "You have subscribed successfully!",
      icon: "success",
    });
    }
    clearInput()
  } 
  const clearInput = () => {
    setSubscribeData({
      email: '',
    })
  }

  return (
    <div className="footer">
      <div className="footer__container container">
      <div className="footer-full">
        <div className="row">
          <div className="footer__top-info col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 mb-4">
            <div style={{width: "200px"}} className="logo-footer">
              <img
                className="footer__top-info--img"
                src="/images/ifo-logo.png"
                alt="ifo logo"
              />
              <p className="footer__top-info--text">
                Wilmington, Delaware, USA
              </p>
              <p className="footer__top-info--text">TURKEY</p>
            </div>
          </div>
          <div className="footer__top-about col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 mb-4">
            <div className="title-footer d-flex">
              <div className="footer__top-title">
                {languageModule.getText("ABOUT_US")}
              </div>
              <div className="titles">
                <ul className="m-o p-0">
                  <li>
                    <Link to="whoisifo" className="footer__top-item">
                      {languageModule.getText("Who_is_IFO")}
                    </Link>
                  </li>
                  <li>
                    <Link to="careers" className="footer__top-item">
                      {languageModule.getText("Careers")}
                    </Link>
                  </li>
                  <li>
                    <Link to="partners" className="footer__top-item">
                      {languageModule.getText("Partners")}
                    </Link>
                  </li>
                  <li>
                    <Link to="projects" className="footer__top-item">
                      {languageModule.getText("Projects")}
                    </Link>
                  </li>
                  <li>
                    <Link to="ifocoin" className="footer__top-item">
                      {languageModule.getText("IFO_Coin")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__top-contact col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 mb-4">
            <div className="title-footer d-flex">
              <div className="footer__top-title">
                {languageModule.getText("CONTACT")}
              </div>
              <div className="titles">
                <ul className="m-0 p-0">
                  <li>
                    <a className="footer__top-item" href="tel:+112345678901">
                      +1 123 456 8901
                    </a>
                  </li>
                  <li>
                    <a className="footer__top-item" href="tel:+9012345678901">
                      +90 123 456 8901
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer__top-item underline"
                      href="mailto:info@ifocorporation.com"
                    >
                      info@ifocorporation.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__top-term col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12">
            <div className="title-footer d-flex">
              <div className="footer__top-title">
                {languageModule.getText("TERM&CONDITIONS")}
              </div>

              <div className="titles">
                <ul className="m-0 p-0">
                  <li>
                    <Link to="privacy" className="footer__top-item">
                      {languageModule.getText("Privacy_Policy")}
                    </Link>
                  </li>
                  <li>
                    <Link to="maintenance" className="footer__top-item">
                      {languageModule.getText("Cookies")}
                    </Link>
                  </li>
                  <li>
                    <Link to="covid" className="footer__top-item">
                      {languageModule.getText("Covid-19")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__socials row mt-5">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 footer__socials ">
            <form onSubmit={handleSubmitSubs} className="input-div">
              <div className="input">
                <input
                  value={subscribeData.email}
                  type="email"
                  placeholder={languageModule.getText("Add_your_e-mail_here")}
                  onChange={e=>setSubscribeData({...subscribeData, email: e.target.value})}
                />
              </div>
              <div className="span">
                <button type="submit">{languageModule.getText("sign_up")}</button>
              </div>
            </form>
          </div>
          <div className="footer__socials--links col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="links">
              <a
                className="footer__socials--link"
                href="https://www.behance.net/ifocorporation"
                target="blank"
              >
                <AiOutlineBehance />
              </a>
              <a
                className="footer__socials--link"
                href="https://www.youtube.com/channel/UC7G6XzILoD3uOoOf118Sesg"
                target="blank"
              >
                <AiFillYoutube />
              </a>
              <a
                className="footer__socials--link"
                href="https://twitter.com/ifocorporation"
                target="blank"
              >
                <AiOutlineTwitter />
              </a>
              <a
                className="footer__socials--link"
                href="https://www.facebook.com/IFO-Corporation-285730903266100"
                target="blank"
              >
                <FaFacebookF />
              </a>
              <a
                className="footer__socials--link"
                href="https://www.instagram.com/ifocorporation/"
                target="blank"
              >
                <AiOutlineInstagram />
              </a>
              <a
                className="footer__socials--link"
                href="https://www.linkedin.com/company/ifocorporation/"
                target="blank"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
      <hr />
      <div className="footer__corp">
        <p>© IFO Corporation 2022</p>
      </div>
    </div>
  );
};
export default Footer;