import './index.css';
import { Rate } from 'antd';
import PropTypes from 'prop-types';

export default function GameRating({ title, rating, ratingCount }) {
	return (
		<div className="game-rating">
			<h4>{title}</h4>
			<div className="game-rating-stars">
				<Rate allowHalf value={rating} disabled />
				<span>{rating}/5</span>
			</div>
			<i>{ratingCount} votes</i>
		</div>
	);
}

GameRating.propTypes = {
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	ratingCount: PropTypes.number,
};
