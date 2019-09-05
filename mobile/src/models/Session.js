import Api from "./Api";

class Session {
  constructor() {}

  get isLoggedIn() {
    return true;
  }

  login = body => {
    return Api.call("authenticate", "POST", body);
  };
}

const sessionObj = new Session();
export default sessionObj;
