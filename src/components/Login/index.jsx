import { useState } from "react";
import { loginUser } from "../../business/user";
import useJwt from "../../hooks/useJwt";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [button, setButton] = useState(true);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser((user) => {
      let newUser = {
        ...user,
        [name]: value,
      };
      disableButton(newUser);
      return newUser;
    });
  };

  const disableButton = (user) => {
    if (user.password !== "" && user.username !== "") {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const { jwt, setJwt } = useJwt();

  return (
    <>
      <div className="form">
        <h1>Login component</h1>
        <div className="bloc">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="bloc">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          disabled={button}
          type="submit"
          onClick={async () => {
            let newJwt = await loginUser(user);
            setJwt(newJwt);
            localStorage.setItem("jwt", jwt);
          }}
        >
          Submit
        </button>
      </div>
      <p>
        You don't have an account yet ? <Link to={"/register"}>Register</Link>
      </p>
    </>
  );
}
