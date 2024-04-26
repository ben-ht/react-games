import './index.css';
import { useParams } from 'react-router-dom';
import useGameScreenshots from '../../hooks/useGameScreenshots';
import GameCarousel from '../GameCarousel';

export default function GameDetails() {
    const id = useParams();
    const screenshots = useGameScreenshots(id)

    return (
        <div className="game-details-container">
            <GameCarousel screenshots={screenshots} />
        </div>
    );

}