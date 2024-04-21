import { useContext } from "react";

import { JwtContext } from "../context/JwtContext";

export default function useJwt() {
  const { jwt, setJwt } = useContext(JwtContext);
  return { jwt, setJwt };
}
