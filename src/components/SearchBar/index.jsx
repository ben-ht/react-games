import './index.css';
import useAllGames from '../../hooks/useAllGames';
import useTopGames from '../../hooks/useTopGames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

let page = 1;
let pagesize = 25;

export default function SearchBar({ setGames }) {
	const [query, setQuery] = useState('');

	const { allGames } = useAllGames({
		pageSize: pagesize,
		page: page,
		term : query
	})

	const topGames = useTopGames({
		pageSize: pagesize,
		page: page,
	});

	useEffect(() => {
		if(query.length > 0) {
			setGames(allGames);
		} else {
			setGames(topGames)
		}
	}, [query, topGames, allGames]);
	

	return (
		<div className="search-bar-container">
			<input
				type="text"
				placeholder="Search for a game..."
				onInput={(e) => setQuery(e.target.value)}
			/>
			<button type="button" className="search-bar-button">
				<i>
					<img src="/src/assets/search-icon.png" />
				</i>
			</button>
		</div>
	);
}

SearchBar.propTypes = {
	games: PropTypes.array.isRequired,
	setGames: PropTypes.func.isRequired,
};
