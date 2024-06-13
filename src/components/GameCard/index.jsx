import useGameCover from '../../hooks/useGameCover';
import PropTypes from 'prop-types';

import './index.css';
import useUser from '../../hooks/useUser';
import View from './view';

export default function GameCard({ game }) {
	const { user } = useUser();

	const { gameCover, loading } = useGameCover({ id: game.id });

	return (
		<View game={game} gameCover={gameCover} loading={loading} user={user} />
	);
}

GameCard.propTypes = {
	game: PropTypes.object.isRequired,
};
