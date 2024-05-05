import useUser from "../../hooks/useUser";
import "./index.css";
import GameCard from "../GameCard";
import { useEffect } from "react";

export default function Profil() {
  const { user, setUser } = useUser();
  useEffect(() => {
    if (user !== undefined) {
      setUser(user);
    }
  }, [user, setUser]);
  return (
    <div>
      <h1>Hello {user.name}</h1>
      <h2>Here is your favorites games list</h2>
      <div className="top-games-container">
        {user.favorites && user.favorites.length !== 0 ? (
          user.favorites.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p>No game add to favorite</p>
        )}
      </div>
    </div>
  );
}
