import { observable } from "mobx";

class Session {
  constructor() {}

  get isLoggedIn() {
    return true;
  }

  login = () => {
    return Promise.resolve;
  };
}

const sessionObj = new Session();
export default sessionObj;
