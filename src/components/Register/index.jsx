import { useState } from "react";
import { createUser } from "../../business/user";
import "./index.css";
import useJwt from "../../hooks/useJwt";

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmationPassword: "",
  });

  const { jwt, setJwt } = useJwt();
  const [button, setButton] = useState(true);
  const [isEqual, setIsEqual] = useState(null);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser((user) => {
      let newUser = {
        ...user,
        [name]: value,
      };
      disableButton(newUser);
      equalPassword(newUser);
      return newUser;
    });
  };

  const disableButton = (user) => {
    if (
      user.password !== "" &&
      user.confirmationPassword !== "" &&
      user.username !== "" &&
      user.password === user.confirmationPassword
    ) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const equalPassword = (user) => {
    if (user.password === user.confirmationPassword) {
      setIsEqual(false);
    } else if (user.password === "" && user.confirmationPassword === "") {
      setIsEqual(null);
    } else {
      setIsEqual(true);
    }
  };

  return (
    <>
      <div className="form">
        <h1>Register component</h1>
        {/* <form> */}
        <div className="inputPart">
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
          <div className="bloc">
            <label>Password confirmation</label>
            <input
              type="password"
              name="confirmationPassword"
              value={user.confirmationPassword}
              onChange={handleInputChange}
            />
            {isEqual && user.confirmationPassword !== "" ? (
              <p>Password and confirmation password must be the same</p>
            ) : null}
          </div>
          <button
            disabled={button}
            onClick={async () => {
              let newJwt = await createUser(user);
              setJwt(newJwt);
              console.log(jwt);
              localStorage.setItem("jwt", jwt);
            }}
          >
            Submit
          </button>
        </div>
        {/* </form> */}
      </div>
    </>
  );
}
