import "./index.css";
import useTopGames from "../../hooks/useTopGames";
import GameCard from "../GameCard";
import SearchBar from "../SearchBar";

export default function Home() {
    const { games, allGames, setGames } = useTopGames();

    return (
        <div className="home-bg">
            <SearchBar games={allGames} setGames={setGames}  />
            <h1>Top Games</h1>
            <div className="top-games-container">
                {games.length > 0 ? 
                games.map((game) => (
                    <GameCard key={game.id} game={game} />
                )) : <h2>No games found</h2>}
            </div>
        </div>
    )

}