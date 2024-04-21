import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import useJwt from "../../hooks/useJwt";

export default function ProfileIcon(isConnected) {
  isConnected = false;
  const { jwt, setJwt } = useJwt();
  const logout = () => {
    setJwt(undefined);
    localStorage.removeItem("jwt");
  };
  const items = [
    {
      key: "1",
      label: <Link to={"/profile"}>My Profile</Link>,
    },
    {
      key: "2",
      label: <Link onClick={logout}>Logout</Link>,
    },
  ];

  if (jwt) {
    isConnected = true;
  } else {
    false;
  }
  if (isConnected) {
    return (
      <Dropdown menu={{ items }} style={{ width: "max-content" }}>
        <a onClick={(e) => e.preventDefault()}>
          <div className="profile-icon">
            <img src="/src/assets/user-icon.svg" />
          </div>
        </a>
      </Dropdown>
    );
  }

  return (
    <div className={"signin-navbar"}>
      <Link to={"/login"}>Sign in</Link>
    </div>
  );
}
