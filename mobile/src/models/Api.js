import { BACKEND_URL } from "../../Constants";

class Api {
  static call = (url, method = "GET", body = {}) => {
    return fetch(`${BACKEND_URL}/${url}`, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .catch(err => {
        console.log("Error", err);
        throw "Error";
      });
  };
}

export default Api;
