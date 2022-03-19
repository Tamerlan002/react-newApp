import contentDataSheet from './content.json';

interface MultilingualModel {
  en: string;
  ru: string;
  tr: string;
}

export enum Languages {
  RU, TR, EN
}


class LanguageModule {
  private currentLanguage: Languages;
  private textContent: { [key: string]: MultilingualModel };

  constructor(initialLanguage: Languages) {
    this.currentLanguage = initialLanguage;
    this.textContent = contentDataSheet;
  }

  setCurrentLanguage = (lang: Languages) => {
    this.currentLanguage = lang;
  }

  getCurrentLanguage = () => {
    return this.currentLanguage;
  }

  getText = (text: string) => {
    let _text = this.textContent[text];

    if (!_text) return "";

    if (this.currentLanguage === Languages.EN) {
      return _text.en;
    }

    if (this.currentLanguage === Languages.RU) {
      return _text.ru;
    }

    if (this.currentLanguage === Languages.TR) {
      return _text.tr;
    }
  }
}

export const languageModule = new LanguageModule(Languages.EN)