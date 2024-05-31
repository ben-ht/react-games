import { Card } from 'antd';
import { Link } from 'react-router-dom';
import useGameCover from '../../hooks/useGameCover';
const { Meta } = Card;
import PropTypes from 'prop-types';

import './index.css';
import useUser from '../../hooks/useUser';
import FavoriteButton from '../FavoriteButton';
import Loading from '../Loading';

export default function GameCard({ game }) {
	const { user } = useUser();

	const { gameCover, loading } = useGameCover({ id: game.id });

	return (
		<Link to={`/games/${game.id}`}>
			<Card
				hoverable
				style={{ width: 400 }}
				cover={
					loading ? (
						<Loading />
					) : gameCover[0] ? (
						<img
							src={gameCover[0].url}
							alt={game.name + ' cover'}
						/>
					) : (
						<img
							src={'https://placehold.co/400x532?text=No+Cover'}
							alt={'Game cover placeholder'}
						/>
					)
				}
			>
				<Meta title={game.name} description={game.storyline} />
				<FavoriteButton game={game} user={user} isDetail={false} />
			</Card>
		</Link>
	);
}

GameCard.propTypes = {
	game: PropTypes.object.isRequired,
};
