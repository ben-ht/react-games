import useUser from '../../hooks/useUser';
import useJwt from '../../hooks/useJwt';
import { useEffect, useState } from 'react';
import { removeFromFavorites, addToFavorites } from '../../business/favorites';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './index.css';
import PropTypes from 'prop-types';

export default function FavoriteButton({ game, isDetailPage }) {
    const [button, setButton] = useState(false);
    const { jwt } = useJwt();
	const { user, setUser } = useUser();

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
		const newList = user.favorites.filter(
			(favorite) => favorite?.id !== game?.id,
		);

		setUser({ ...user, favorites: newList });
	};

	if (jwt) {
		return (
			<>
				{button ? (
					<Button className='favorite-button'
						onClick={handleRemoveFromFavorites}
						icon={<MinusOutlined />}
						title={isDetailPage ? 'Remove from favorites' : null}
						size={isDetailPage ? 'large' : 'middle'}
					>
						{isDetailPage ? null : 'Remove from favorites'}
					</Button>
				) : (
					<Button
                        className='favorite-button'
						onClick={handleAddToFavorites}
						icon={<PlusOutlined />}
						title={isDetailPage ? 'Add to favorites' : null}
						size={isDetailPage ? 'large' : 'middle'}
					>
						{isDetailPage ? null : 'Add to favorites'}
					</Button>
				)}
			</>
		);
	}
}

FavoriteButton.propTypes = {
	game: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
	isDetail: PropTypes.bool.isRequired,
};
