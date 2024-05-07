import './index.css';
import GameCard from '../GameCard';
import SearchBar from '../SearchBar';
import useTopGames from '../../hooks/useTopGames';
import { useState } from 'react';

export default function AllGames() {
	const games = useTopGames({
		pageSize: 25,
		page: 1,
	});

	return (
		<div className="home-bg">
			<SearchBar games={''} setFilteredGames={''} />
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
