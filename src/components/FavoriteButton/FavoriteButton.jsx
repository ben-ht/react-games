import { useEffect, useState } from 'react';
import useUser from '../../hooks/useUser';
import { removeFromFavorites, addToFavorites } from '../../business/favorites';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import useJwt from '../../hooks/useJwt';
import './index.css';

export default function FavoriteButton({ game, isDetail }) {
	const [button, setButton] = useState(false);
	const { jwt } = useJwt();
	const { user } = useUser();

	useEffect(() => {
		const favoritesIds = [];
		const isFav = () => {
			if (user && user.favorites) {
				user.favorites.map(({ id }) => {
					favoritesIds.push(id);
				});
				setButton(favoritesIds.includes(game.id));
			}
		};
		isFav();
	}, [user, game.id]);

	const handleAddToFavorites = (event) => {
		event.preventDefault();
		setButton(true);
		addToFavorites(jwt, game.id);
	};

	const handleRemoveFromFavorites = (event) => {
		event.preventDefault();
		setButton(false);
		removeFromFavorites(jwt, game.id);
	};

	if (jwt) {
		return (
			<>
				{button ? (
					<Button
						className="game-card-button"
						onClick={handleRemoveFromFavorites}
						icon={<MinusOutlined />}
					>
						{isDetail ? null : 'Remove from favorites'}
					</Button>
				) : (
					<Button
						className="game-card-button"
						onClick={handleAddToFavorites}
						icon={<PlusOutlined />}
					>
						{isDetail ? null : 'Add favorites'}
					</Button>
				)}
			</>
		);
	}
}
