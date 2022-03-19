import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { languageModule, Languages } from '../../helpers/languages';
import LanguageService from '../../helpers/languages/service';

interface HeaderIfoState {
  language: Languages;
}
export interface HeaderProps {
  onLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const HeaderIfo: FC<HeaderProps> = (props) => {
  // const [state, setState] = useState<HeaderIfoState>({
  //   language: Languages.EN,
  // });

  // const languageService = new LanguageService(state, setState);
  // useEffect(() => { }, [state.language])

  return (
    <nav className="navbar navbar-expand-lg navbar-light  header">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon span">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <Link to="/">
          <img className='header-logo' src="/images/ifo-logo.png" alt="ifo-logo" />
        </Link>

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

export default HeaderIfo;
