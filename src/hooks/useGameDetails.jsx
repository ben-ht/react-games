import { useEffect, useState } from "react";
import useJwt from "./useJwt";

export default function useGameDetails({ id }) {
  const [gameDetails, setGameDetails] = useState([]);
  const { jwt } = useJwt();

  useEffect(() => {
    async function getGameDetails() {
      const res = await fetch(`https://m1.dysnomia.studio/api/Games/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const json = await res.json();
      setGameDetails(json);
    }
    if (jwt !== undefined) {
      getGameDetails();
    }
  }, [id, jwt]);

  return gameDetails;
}
