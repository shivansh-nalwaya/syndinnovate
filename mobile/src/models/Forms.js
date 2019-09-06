import Api from "./Api";

class Form {
  find(id) {
    return Api.call(`form_configs/${id}`);
  }

  update(id, data) {
    delete data.id;
    return Api.call(`form_configs/${id}`, "PUT", data);
  }
}

const formObj = new Form();

export default formObj;
