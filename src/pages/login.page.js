import React, { useState, memo } from "react";
import { observer } from "mobx-react-lite";
import useStore from "../store";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const { userStore } = useStore();
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const onJoin = () => {
    userStore.setUser({ username, password });
    history.push("/chat");
  };

  return (
    <div className="content">
      <div className="center">
        <div className="login-page">
          <input
            placeholder="Username"
            className="input"
            value={username}
            onChange={onUsernameChanged}
          />
          <input
            placeholder="password"
            type="password"
            className="input"
            value={password}
            onChange={onPasswordChanged}
          />
          <button onClick={onJoin}>Join</button>
        </div>
      </div>
    </div>
  );
};

export default memo(observer(LoginPage));
