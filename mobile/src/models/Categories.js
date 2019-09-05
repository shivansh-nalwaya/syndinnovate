import Images from "../images";
import Api from "./Api";

class Categories {
  all() {
    return Api.call("categories").then(res => res.categories);
  }

  create(data) {
    return Api.call("categories", "POST", data);
  }
}

const categoryObj = new Categories();

export default categoryObj;
