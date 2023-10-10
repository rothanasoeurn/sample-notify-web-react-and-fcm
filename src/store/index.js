import React from "react";
import UserStore from "./user.store";

const userStore = new UserStore();

const storeContext = React.createContext({
  userStore,
});

const useStore = () => React.useContext(storeContext);

export default useStore;
