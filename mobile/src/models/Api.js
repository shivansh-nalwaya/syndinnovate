import { BACKEND_URL } from "../../Constants";
import SyncStorage from "sync-storage";

class Api {
  static async call(url, method = "GET", body = {}) {
    let token = SyncStorage.get("token");

    let fetchBody = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    };
    if (method !== "GET") {
      fetchBody["method"] = method;
      fetchBody["body"] = JSON.stringify(body);
    }
    return fetch(`${BACKEND_URL}/${url}`, fetchBody)
      .then(res => {
        if (res.ok) return res.json();
        else throw res;
      })
      .catch(err => {
        console.log("Error", err);
        throw "Error";
      });
  }
}

export default Api;
