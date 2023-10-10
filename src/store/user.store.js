import { observable, decorate, action } from "mobx";

class UserStore {
  host = "localhost";
  user = {
    username: "",
    password: "",
  };

  setUser(user) {
    this.user = user;
  }
}

decorate(UserStore, {
  host: observable,
  user: observable,
  setUser: action,
});

export default UserStore;
