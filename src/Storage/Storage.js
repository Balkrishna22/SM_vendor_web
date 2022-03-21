import { dataDecrypt, dataEncrypt } from "./crypto";

class Storage {
  static set(key, value) {
    localStorage.setItem(key, dataEncrypt(value));
  }

  static get(key) {
    let item = localStorage.getItem(key);
    if (item) {
      return dataDecrypt(item);
    } else {
      return false;
    }
  }

  static remove(key) {
    localStorage.removeItem(key);
    if (key === "auth") {
      window.location.href = "/";
    }
  }
}

export default Storage;
