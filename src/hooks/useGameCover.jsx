import { useEffect, useState } from 'react';

export default function useGameCover({ id }) {
	const [gameCover, setGameCover] = useState([]);

	useEffect(() => {
		async function getGameCover() {
			const res = await fetch(
				`https://m1.dysnomia.studio/api/Games/covers/${id}`,
			);

			if (!res.ok) {
				throw new Error(await res.text());
			}

			const json = await res.json();
			setGameCover(json);
		}

		getGameCover();
	}, [id]);

	return gameCover;
}
