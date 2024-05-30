import './index.css';
import { useState } from 'react';
import View from './view.jsx';

export default function AllGames() {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	return (
		<View
			games={games}
			setGames={setGames}
			loading={loading}
			setLoading={setLoading}
			page={page}
			setPage={setPage}
		/>
	);
}
