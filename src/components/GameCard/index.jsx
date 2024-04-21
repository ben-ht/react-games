import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

import './index.css';

export default function GameCard({ game }) {
    return (
        <Link to={`/games/${game.id}`}>
            <Card
                hoverable
                style={{ width: 240 }}
            >
                <Meta title={game.name} description={game.storyline} />
            </Card>
        </Link>
    );
}