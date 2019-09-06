import Images from "../images";
import Api from "./Api";

class Categories {
  all() {
    return Api.call("categories").then(res => res.categories);
  }

  create_or_update(data) {
    if (!!data.id) return this.update(data.id, data);
    return Api.call("categories", "POST", data);
  }

  update(id, data) {
    delete data.id;
    return Api.call(`categories/${id}`, "PUT", data);
  }
}

const categoryObj = new Categories();

export default categoryObj;
