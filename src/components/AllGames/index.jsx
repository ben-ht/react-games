import './index.css';
import { useState } from 'react';
import GameCard from '../GameCard';
import SearchBar from '../SearchBar';

export default function AllGames() {
	const [games, setGames] = useState([]);

	return (
		<div className="home-bg">
			<SearchBar setGames={setGames} />
			<h1>All Games</h1>
			<div className="top-games-container">
				{games.length > 0 ? (
					games.map((game) => <GameCard key={game.id} game={game} />)
				) : (
					<h2>No games found</h2>
				)}
			</div>
		</div>
	);
}
