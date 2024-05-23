import { Card } from 'antd';
import { Link } from 'react-router-dom';
import useGameCover from '../../hooks/useGameCover';
const { Meta } = Card;

import './index.css';
import useUser from '../../hooks/useUser';
import FavoriteButton from '../FavoriteButton';

export default function GameCard({ game }) {
	const { user } = useUser();

	const gameCover = useGameCover({ id: game.id });

	return (
		<Link to={`/games/${game.id}`}>
			<Card
				hoverable
				style={{ width: 400 }}
				cover={
					<img src={gameCover[0]?.url} alt={game.name + ' cover'} />
				}
			>
				<Meta title={game.name} description={game.storyline} />
				<FavoriteButton game={game} user={user} isDetail={false} />
			</Card>
		</Link>
	);
}
