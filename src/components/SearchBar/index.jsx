import './index.css';
import useAllGames from '../../hooks/useAllGames';

export default function SearchBar({ filteredGames, setFilteredGames }) {
	function handleInput(query) {}

	return (
		<div className="search-bar-container">
			<input
				type="text"
				placeholder="Search for a game..."
				onInput={(e) => handleInput(e.target.value)}
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
