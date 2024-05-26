import './index.css';
import { useState } from 'react';
import GameCard from '../GameCard';
import SearchBar from '../SearchBar';
import Loading from '../Loading';

export default function AllGames() {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(false);

	return (
		<div className="home-bg">
			<SearchBar setGames={setGames} setLoading={setLoading} />
			<h1>All Games</h1>
			<div className="top-games-container">
				{loading ? (
					<Loading />
				) : games.length > 0 ? (
					games.map((game) => <GameCard key={game.id} game={game} />)
				) : (
					<h2>No games found</h2>
				)}
			</div>
		</div>
	);
}
