import { BACKEND_URL } from "../../Constants";

class Api {
  static token() {
    return "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1Njc3NzM1MTF9.HBvwUho8s356VopX2a6cx--BsGmu2qKbXmk3f5RZ16U";
  }

  static call = (url, method = "GET", body = {}) => {
    let fetchBody = {
      headers: {
        "Content-Type": "application/json",
        Authorization: this.token()
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
  };
}

export default Api;
