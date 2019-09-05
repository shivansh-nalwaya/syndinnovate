import { AsyncStorage } from "react-native";
import { BACKEND_URL } from "../../Constants";

class Api {
  static async call(url, method = "GET", body = {}) {
    let token = await AsyncStorage.getItem("token");

    let fetchBody = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    };
    if (method === "POST") {
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
