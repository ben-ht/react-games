import { useEffect, useState } from 'react';
import useJwt from './useJwt';

export default function useAllGames({ pageSize, page, term }) {
	const [allGames, setAllGames] = useState([]);
	const { jwt } = useJwt();

	useEffect(() => {
		if (term.length === 0) {
			return;
		}

		async function getAllGames() {
			const res = await fetch(
				`https://m1.dysnomia.studio/api/Games/search?pageSize=${pageSize}&page=${page}&term=${term}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${jwt}`,
					},
				},
			);

			if (!res.ok) {
				throw new Error(await res.text());
			}

			const json = await res.json();
			setAllGames(json);
		}

		getAllGames();
	}, [pageSize, page, term]);

	return { allGames, setAllGames };
}
