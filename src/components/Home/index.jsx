import "./index.css";
import useTopGames from "../../hooks/useTopGames";
import Card from "../GameCard";
import GameCard from "../GameCard";

const { Meta } = Card;

export default function Home() {
    const topGames = useTopGames();

    return (
        <div className="home-bg">
            <h1>Top Games</h1>
            <div className="top-games-container">
                {topGames.map((game) => (
                    <GameCard game={game} />
                ))}
            </div>
        </div>
    )

}