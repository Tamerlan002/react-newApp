import { Dispatch, SetStateAction, MouseEvent } from "react";
import { AppState } from ".";

export default class Service {
  constructor(private state: AppState, private setState: Dispatch<SetStateAction<AppState>>) {

  }

  initialize = () => {

  }

}