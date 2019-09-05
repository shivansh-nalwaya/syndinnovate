import Api from "./Api";
import SyncStorage from "sync-storage";

class Session {
  get isLoggedIn() {
    return !!SyncStorage.get("token");
  }

  login = body => {
    return Api.call("authenticate", "POST", body).then(res => {
      SyncStorage.set("token", res.auth_token);
    });
  };

  logout = () => {
    SyncStorage.remove("token");
  };
}

const sessionObj = new Session();
export default sessionObj;
