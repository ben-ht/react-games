import './index.css';
import PropTypes from 'prop-types';
export default function SearchBar({ games, setGames }) {
	function handleInput(query) {
		let filteredGames = games.filter((game) =>
			game.name.toLowerCase().includes(query.toLowerCase()),
		);
		setGames(filteredGames);
	}

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
