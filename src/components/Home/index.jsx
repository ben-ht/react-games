import "./index.css";
import useTopGames from "../../hooks/useTopGames";
import GameCard from "../GameCard";
import SearchBar from "../SearchBar";

export default function Home() {
    const topGames = useTopGames();

    return (
        <div className="home-bg">
            <SearchBar />
            <h1>Top Games</h1>
            <div className="top-games-container">
                {topGames.map((game) => (
                    <GameCard game={game} />
                ))}
            </div>
        </div>
    )

}