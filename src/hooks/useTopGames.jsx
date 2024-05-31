import { useEffect, useState } from 'react';

export default function useTopGames({ pageSize, page }) {
	const [games, setGames] = useState([]);

	useEffect(() => {
		async function getTopGames() {
			const res = await fetch(
				`https://m1.dysnomia.studio/api/Games/top?pageSize=${pageSize}&page=${page}`,
			);

			if (!res.ok) {
				throw new Error(await res.text());
			}

			const json = await res.json();
			setGames(json);
		}

		getTopGames();
	}, [pageSize, page]);

	return games;
}
