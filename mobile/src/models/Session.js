import Api from "./Api";
import { AsyncStorage } from "react-native";

class Session {
  get isLoggedIn() {
    return !!AsyncStorage.getItem("token");
  }

  login = body => {
    return Api.call("authenticate", "POST", body).then(res => {
      AsyncStorage.setItem("token", res.auth_token);
    });
  };

  logout = () => {
    AsyncStorage.clear();
  };
}

const sessionObj = new Session();
export default sessionObj;
