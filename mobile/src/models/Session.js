import { BACKEND_URL } from "../../Constants";

class Session {
  constructor() {}

  get isLoggedIn() {
    return true;
  }

  login = body => {
    console.log(body);
    return fetch(`${BACKEND_URL}/authenticate`, {
      method: "POST",
      body: JSON.stringify(body)
    });
  };
}

const sessionObj = new Session();
export default sessionObj;
