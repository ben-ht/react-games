import { useEffect, useState } from 'react';

export default function useTopGames() {
	const [allGames, setAllGames] = useState([]);
	const [games, setGames] = useState([]);

	useEffect(() => {
		async function getTopGames() {
			const res = await fetch('https://m1.dysnomia.studio/api/Games/top');

			if (!res.ok) {
				throw new Error(await res.text());
			}

			const json = await res.json();
			setGames(json);
			setAllGames(json);
		}

		getTopGames();
	}, []);

	return { games, allGames, setGames };
}
