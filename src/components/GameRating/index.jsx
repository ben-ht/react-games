import './index.css';
import { Rate } from 'antd';

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
