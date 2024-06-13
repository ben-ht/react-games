import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';
import FavoriteButton from '../FavoriteButton';
import Loading from '../Loading';

const { Meta } = Card;

export default function GameCard({ game, user, gameCover, loading }) {
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
