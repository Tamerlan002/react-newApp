import React, { FC, useEffect, useState } from 'react';
import { AiOutlineInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillBehanceCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { languageModule, Languages } from '../../helpers/languages';
import LanguageService from '../../helpers/languages/service';
interface HeaderState {
  language: Languages;
}
export interface HeaderProps {
  onLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Header: FC<HeaderProps> = (props) => {
  // const [state, setState] = useState<HeaderState>({
  //   language: Languages.EN,
  // });

  // const languageService = new LanguageService(state, setState);

  // useEffect(() => { }, [state.language])

  return (
    <nav className="navbar navbar-expand-lg navbar-light  header">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span style={{ backgroundColor: "white !important" }} className="navbar-toggler-icon"></span>
        </button>
        <Dropdown>
          <Dropdown.Toggle className='header__socials' id="dropdown-basic">
            <AiOutlineInstagram />
          </Dropdown.Toggle>
          <Dropdown.Menu className='header__socials--item'>
            <Dropdown.Item
              className='header__socials--item'
              href="https://www.instagram.com/ifocorporation/"
              target="blank">
              <AiOutlineInstagram />
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.facebook.com/IFO-Corporation-285730903266100"
              target="blank">
              <AiFillFacebook />
            </Dropdown.Item>
            <Dropdown.Item
              href="https://twitter.com/ifocorporation"
              target="blank">
              <AiFillTwitterCircle />
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.behance.net/ifocorporation"
              target="blank">
              <AiFillBehanceCircle />
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.linkedin.com/company/ifocorporation/"
              target="blank">
              <AiFillLinkedin />
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.youtube.com/channel/UC7G6XzILoD3uOoOf118Sesg"
              target="blank">
              <AiFillYoutube />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div style={{ flexGrow: "inherit" }} className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className="nav-item pt-1">
              <Link to="/" className="header__links--item" >
                {languageModule.getText("Home")}
              </Link>
            </li>
            <li className="nav-item pt-1">
              <Link to="news" className="header__links--item">
                {languageModule.getText("News")}
              </Link>
            </li>
            <li className="nav-item pt-1">
              <Link to="whoisifo" className="header__links--item">
                {languageModule.getText("Who_is_IFO")}
              </Link>
            </li>
            <li className="nav-item pt-1">
              <Link to="projects" className="header__links--item">
                {languageModule.getText("Projects")}
              </Link>
            </li>
            <li className="nav-item pt-1">
              <Link to="partners" className="header__links--item">
                {languageModule.getText("Partners")}
              </Link>
            </li>
            <li className="nav-item pt-1">
              <Link to="ifocoin" className="header__links--item">
                {languageModule.getText("IFO_Coin")}
              </Link>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <select className='header__lang'
            onChange={props.onLanguageChange} name="lang" id="">
            <option className='header__lang--item' value="en">EN</option>
            <option className='header__lang--item' value="ru">RU</option>
            <option className='header__lang--item' value="tr">TR</option>
          </select>
        </form>
      </div>
    </nav>
  )
}

export default Header
