import useUser from '../../hooks/useUser';
import useJwt from '../../hooks/useJwt';
import './index.css';
import PropTypes from 'prop-types';
import View from './view';

export default function FavoriteButton({ game, isDetail }) {
	const { jwt } = useJwt();
	const { user, setUser } = useUser();

	return (
		<View
			game={game}
			isDetail={isDetail}
			jwt={jwt}
			user={user}
			setUser={setUser}
		/>
	);
}

FavoriteButton.propTypes = {
	game: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
	isDetail: PropTypes.bool.isRequired,
};
