import './index.css';
import useAllGames from '../../hooks/useAllGames';
import useTopGames from '../../hooks/useTopGames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function SearchBar({ setGames, setLoading, page }) {
	const [query, setQuery] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	const { allGames } = useAllGames({
		pageSize: 25,
		page: page,
		term: searchTerm,
	});

	const topGames = useTopGames({
		pageSize: 25,
		page: page,
	});

	useEffect(() => {
		if (query.length > 0) {
			setGames(allGames);
			setLoading(false);
		} else {
			setGames(topGames);
			setLoading(false);
		}
	}, [searchTerm, topGames, allGames, page]);

	async function handleSearch() {
		setLoading(true);
		setSearchTerm(query);
	}

	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			handleSearch();
		}
	}

	return (
		<div className="search-bar-container">
			<input
				type="text"
				placeholder="Search for a game..."
				onInput={(e) => setQuery(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button
				type="button"
				className="search-bar-button"
				onClick={handleSearch}
			>
				<i>
					<img src="/src/assets/search-icon.png" />
				</i>
			</button>
		</div>
	);
}

SearchBar.propTypes = {
	setGames: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired,
};
