import useUser from "../../hooks/useUser";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";

export default function Profil() {
  const { user } = useUser();
  return (
    <div>
      <h1>Hello {user.name}</h1>
      <h2>Here is your favorites games list</h2>
      <div className="top-games-container">
        {user.favorites && user.favorites.length !== 0 ? (
          user.favorites.map((game) => (
            <Card key={game.id} hoverable style={{ width: 240 }}>
              <Meta title={game.name} description={game.storyline} />
            </Card>
          ))
        ) : (
          <p>No game add to favorite</p>
        )}
      </div>
    </div>
  );
}
