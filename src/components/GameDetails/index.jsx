import './index.css';
import { useParams } from 'react-router-dom';
import { Rate } from 'antd';
import useGameScreenshots from '../../hooks/useGameScreenshots';
import useGameDetails from '../../hooks/useGameDetails';
import GameCarousel from '../GameCarousel';

export default function GameDetails() {
    const id = useParams();
    const screenshots = useGameScreenshots(id);
    const game = useGameDetails(id);
    console.log(game)

    return (
        <div className='game-details-bg'>
            <div className="game-details-container">            
                <h1>{game.name}</h1>

                <GameCarousel screenshots={screenshots} />
                <div className='game-description'>
                    {game.storyline}
                </div>

                <div className="game-ratings">
                    <div className="game-rating">
                        <h4>Aggregated ratings</h4>
                        <div className='game-rating-stars'>
                            <Rate allowHalf value={(game.aggregatedRating/20).toFixed(2)} disabled />
                            <span>{(game.aggregatedRating/20).toFixed(2)}/5</span>
                        </div>
                        <i>{game.aggregatedRatingCount} votes</i>
                    </div>
                    <div className="game-rating">
                        <h4>Player ratings</h4>
                        <div className='game-rating-stars'>
                            <Rate allowHalf value={(game.rating/20).toFixed(2)} disabled />
                            <span>{(game.rating/20).toFixed(2)}/5</span>
                        </div>
                        <i>{game.ratingCount} votes</i>
                    </div>
                </div>
            </div>
        </div>
    );

}