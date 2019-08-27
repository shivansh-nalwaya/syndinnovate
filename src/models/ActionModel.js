import { extendObservable } from "mobx";
import { Actions } from "react-native-router-flux";

const FULL_PAGES = ["home", "login", "signup"];

class ActionModel {
  constructor() {
    extendObservable(this, {
      current: Actions.current || "dashboard"
    });
  }

  jump(scene, props = {}) {
    this.current = scene;
    Actions.jump(scene, props);
  }

  get hideHeaderFooter() {
    return FULL_PAGES.includes(this.current);
  }
}

const actionObj = new ActionModel();
export default actionObj;
