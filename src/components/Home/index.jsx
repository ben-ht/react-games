import "./index.css";
import useTopGames from "../../hooks/useTopGames";
import { Card } from "antd";

const { Meta } = Card;

export default function Home() {
    const topGames = useTopGames();

    return (
        <>
            <h1>Top Games</h1>
            <div className="top-games-container">
                {topGames.map((game) => (
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="Game cover" src={""} />}
                    >
                        <Meta title={game.name} description={game.storyline} />
                    </Card>
                ))}
            </div>
        </>
    )

}