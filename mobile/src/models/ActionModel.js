import { observable, computed, decorate } from "mobx";
import { Actions } from "react-native-router-flux";
import { ROUTES } from "../../Constants";

class ActionModel {
  current = Actions.current || "dashboard";

  jump(scene, props = {}) {
    this.current = scene;
    Actions.jump(scene, props);
  }

  get currentRoute() {
    return ROUTES.filter(t => t.action === this.current)[0];
  }

  get tabs() {
    return ROUTES.filter(r => r.footer);
  }

  get hideHeaderFooter() {
    return !this.currentRoute.header;
  }

  get currentTitle() {
    return this.currentRoute.title;
  }
}

decorate(ActionModel, {
  current: observable,
  currentRoute: computed,
  currentTitle: computed,
  hideHeaderFooter: computed
});

const actionObj = new ActionModel();
export default actionObj;
