import './index.css';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useGameScreenshots from '../../hooks/useGameScreenshots';
import useGameDetails from '../../hooks/useGameDetails';
import GameCarousel from '../GameCarousel';
import GameRating from '../GameRating';
import { addToFavorites, removeFromFavorites } from '../../business/favorites';
import { useContext } from 'react';
import { JwtContext } from '../../context/JwtContext';

export default function GameDetails() {
    const id = useParams();
    const screenshots = useGameScreenshots(id);
    const game = useGameDetails(id);
    const { jwt } = useContext(JwtContext);

    const aggregatedRating = (game.aggregatedRating/20).toFixed(2);
    const playerRating = (game.rating/20).toFixed(2);

    return (
        <div className='game-details-bg'>
            <div className="game-details-container">
                <div className='game-details-title'>
                    <h1>{game.name}</h1>
                    <Button icon={<PlusOutlined />} size='large' title="Add to favorites" onClick={() => addToFavorites(jwt, game.id)}></Button>
                </div>
                <GameCarousel screenshots={screenshots} />
                <div className='game-description'>
                    {game.storyline}
                </div>

                <div className="game-ratings">
                    <GameRating title="Aggregated Rating" rating={aggregatedRating} ratingCount={game.aggregatedRatingCount} />
                    <GameRating title="Players Rating" rating={playerRating} ratingCount={game.ratingCount} />
                </div>
                <hr/>
                <div className='game-details-extra'>
                    <p><b>Release date:</b>&nbsp; {game.firstReleaseDate?.substring(0, 10)}</p>
                </div>
            </div>
        </div>
    );

}