import { Dispatch, SetStateAction } from "react";
import { languageModule, Languages } from ".";
import { AppState } from "../../App";


export default class LanguageService {
  constructor(private state: AppState, private setState: Dispatch<SetStateAction<AppState>>) { }

  selectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let selectedLang = event.currentTarget.value;
    if (selectedLang === 'en') {
      languageModule.setCurrentLanguage(Languages.EN);
      this.setState({ ...this.state, language: Languages.EN })
    }

    if (selectedLang === 'ru') {
      languageModule.setCurrentLanguage(Languages.RU);
      this.setState({ ...this.state, language: Languages.RU })
    }

    if (selectedLang === 'tr') {
      languageModule.setCurrentLanguage(Languages.TR);
      this.setState({ ...this.state, language: Languages.TR })
    }
  }

}