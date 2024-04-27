import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useContext } from "react";
import { JwtContext } from "../../context/JwtContext";

const { Meta } = Card;

import './index.css';

export default function GameCard({ game }) {
    const { jwt } = useContext(JwtContext);

    return (
        <Link to={`/games/${game.id}`}>
            <Card
                hoverable
                style={{ width: 400 }}
            >
                <Meta title={game.name} description={game.storyline} />
                <Button className={jwt == null ? 'game-card-button hidden' : 'game-card-button'}  icon={<PlusOutlined />}>Add to favourites</Button>
            </Card>
        </Link>
    );
}