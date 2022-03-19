
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../api/api';
import { languageModule, Languages } from '../../../helpers/languages';
import "./details.scss"
const Details = () => {

    const [project, setProject] = useState({});
    const { id } = useParams();

    useEffect(() => {
        api.get(`projects/${id}`)
            .then(response => setProject(response.data))
    }, [])


    const getTranslatedTitle = (item) => {
        let currentLanguage = languageModule.getCurrentLanguage();
        if (currentLanguage === Languages.EN) return item.title_en;
        if (currentLanguage === Languages.RU) return item.title_ru;
        if (currentLanguage === Languages.TR) return item.title_tr;
    }

    const getTranslatedSubTitle = (item) => {
        let currentLanguage = languageModule.getCurrentLanguage();
        if (currentLanguage === Languages.EN) return item.desc_en;
        if (currentLanguage === Languages.RU) return item.desc_ru;
        if (currentLanguage === Languages.TR) return item.desc_tr;
    }

    const getTranslatedText = (item) => {
        let currentLanguage = languageModule.getCurrentLanguage();
        if (currentLanguage === Languages.EN) return item.text_en;
        if (currentLanguage === Languages.RU) return item.text_ru;
        if (currentLanguage === Languages.TR) return item.text_tr;
    }


    // console.log(project)
    return (
        <div className='Details mt-3 container'>
            <div className='details-full'>
                <div className='image'>
                    <div className='img'>
                        <img src={project.cover_img} />
                        <span className='project-name'>{getTranslatedTitle(project)}</span>
                    </div>
                </div>
                <div className='about-project'>
                    <h5 className='pb-4'>{getTranslatedSubTitle(project)}</h5>
                    <p>{getTranslatedText(project)}</p>
                </div>
            </div>
        </div>
    );
}



export default Details;
