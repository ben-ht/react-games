import './index.css';
import View from './view';
import { useParams } from 'react-router-dom';
import useGameScreenshots from '../../hooks/useGameScreenshots';
import useGameDetails from '../../hooks/useGameDetails';
import useCompanies from '../../hooks/useCompanies';

export default function GameDetails() {
	const id = useParams();
	const screenshots = useGameScreenshots(id);
	const game = useGameDetails(id);

	const gameCompanies = useCompanies(game);

	return (
		<View
			game={game}
			screenshots={screenshots}
			gameCompanies={gameCompanies}
		/>
	);
}
