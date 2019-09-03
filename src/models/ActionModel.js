import { extendObservable, computed } from "mobx";
import { Actions } from "react-native-router-flux";

const FULL_PAGES = ["home", "login", "signup"];

export const tabs = [
  {
    title: "Home",
    icon: "home",
    action: "dashboard"
  },
  {
    title: "Stats",
    icon: "chart-pie",
    action: "stats"
  },
  {
    title: "Rewards",
    icon: "star",
    action: "rewards"
  },
  {
    title: "Profile",
    icon: "user",
    action: "profile"
  }
];

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

  get currentTitle() {
    return tabs.filter(t => t.action === this.current)[0].title;
  }
}

const actionObj = new ActionModel();
export default actionObj;
