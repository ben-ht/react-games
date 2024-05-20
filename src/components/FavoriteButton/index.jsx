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
	const { user, setUser } = useUser();
	const [timeOutId, setTimeoutId] = useState();

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
		if (timeOutId) {
			clearTimeout(timeOutId);
		}
		event.preventDefault();
		setButton(true);
		addToFavorites(jwt, game.id);
	};

	const handleRemoveFromFavorites = (event) => {
		event.preventDefault();
		setButton(false);
		removeFromFavorites(jwt, game.id);
		const timeouId = setTimeout(function () {
			const newList = user.favorites.filter(
				(favorite) => favorite?.id !== game?.id,
			);

			setUser({ ...user, favorites: newList });
		}, 2000);
		setTimeoutId(timeouId);
	};

	if (jwt) {
		return (
			<>
				{button ? (
					<Button
						onClick={handleRemoveFromFavorites}
						icon={<MinusOutlined />}
						title={isDetail ? 'Remove from favorites' : null}
						size={isDetail ? 'large' : 'middle'}
					>
						{isDetail ? null : 'Remove from favorites'}
					</Button>
				) : (
					<Button
						onClick={handleAddToFavorites}
						icon={<PlusOutlined />}
						title={isDetail ? 'Add to favorites' : null}
						size={isDetail ? 'large' : 'middle'}
					>
						{isDetail ? null : 'Add to favorites'}
					</Button>
				)}
			</>
		);
	}
}