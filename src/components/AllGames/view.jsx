import './index.css';
import GameCard from '../GameCard';
import SearchBar from '../SearchBar';
import Loading from '../Loading';
import Pagination from '../Pagination';

export default function AllGames({
	games,
	setGames,
	loading,
	setLoading,
	page,
	setPage,
}) {
	return (
		<div className="home-bg">
			<SearchBar
				setGames={setGames}
				setLoading={setLoading}
				page={page}
			/>
			<div className="top-games-container">
				{loading ? (
					<Loading />
				) : games.length > 0 ? (
					games.map((game) => <GameCard key={game.id} game={game} />)
				) : (
					<h2>No games found</h2>
				)}
			</div>
			<Pagination page={page} setPage={setPage} games={games} />
		</div>
	);
}
