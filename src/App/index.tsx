import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader";

import Footer from '../components/footer';
import Header from '../components/header-ifo';
import { Languages } from '../helpers/languages';
import LanguageService from '../helpers/languages/service';
import HomePage from '../pages/home';
import IfoCoinPage from '../pages/ifoCoin';
import FormGroup from '../pages/careers/categoryPage/FormGroup';
import Details from '../pages/projects/project-details/Details';
import NewsPage from '../pages/news';
import SingleNews from '../pages/news/singleNews/Single-news';
import PartnersPage from '../pages/partners';
import ProjectsPage from '../pages/projects';
import WhoIsIfoPage from '../pages/whoIsIfo';
import ScrollToTop from '../components/scroll/ScrollToTop';

import './styles.scss'
import CareersPage from '../pages/careers/index';
import PrivacyPolicyPage from '../pages/privacyPolicy';
import CookiesPage from '../pages/cookies';
import CovidPage from '../pages/covid';
import axios from 'axios';
import Service from './service';


export interface AppState {
  language: Languages;
}


function App() {

  const [state, setState] = useState<AppState>({
    language: Languages.EN,
  });
  const [loadingPage, setLoadingPage] = useState(false)


  const languageService = new LanguageService(state, setState);
  const service = new Service(state, setState);

  useEffect(() => { }, [state.language])

  useEffect(() => {
    setLoadingPage(true)
    setTimeout(() => {
      setLoadingPage(false)
    }, 2000)
  }, [])


  return (
    <div className='App'>
      {
        loadingPage ?
          <div className='loader'>
            <GridLoader
              color={"#f7b633"}
              loading={loadingPage}
              size={15}
              margin={2}
            />
          </div>
          :
          <div>
            <div className="app-wrapper">
              <ScrollToTop />
              <Header onLanguageChange={languageService.selectLanguage} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="news/:id" element={<SingleNews />} />
                <Route path="whoisifo" element={<WhoIsIfoPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:id" element={<Details />} />
                <Route path="partners" element={<PartnersPage />} />
                <Route path="ifocoin" element={<IfoCoinPage />} />
                <Route path="careers" element={<CareersPage />} />
                <Route path="careers/category-page" element={<FormGroup />} />
                <Route path="privacy" element={<PrivacyPolicyPage />} />
                <Route path="cookies" element={<CookiesPage />} />
                <Route path="covid" element={<CovidPage />} />
              </Routes>
            </div>
            <Footer />
          </div>

      }
    </div>
  );
}

export default App;
