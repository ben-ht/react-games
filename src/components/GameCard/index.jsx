import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { JwtContext } from '../../context/JwtContext';
const { Meta } = Card;

import './index.css';
import useUser from '../../hooks/useUser';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

export default function GameCard({ game }) {
	const { user, setUser } = useUser();

	useEffect(() => {
		if (user !== undefined) {
			setUser(user);
		}
	}, [user, setUser]);

	return (
		<Link to={`/games/${game.id}`}>
			<Card hoverable style={{ width: 400 }}>
				<Meta title={game.name} description={game.storyline} />
				<FavoriteButton game={game} user={user} isDetail={false} />
			</Card>
		</Link>
	);
}
