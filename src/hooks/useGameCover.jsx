import { useEffect, useState } from 'react';

export default function useGameCover({ id }) {
	const [gameCover, setGameCover] = useState([]);
	const [loading, setLoading] = useState(null);

	useEffect(() => {
		async function getGameCover() {
			setLoading(true);
			const res = await fetch(
				`https://m1.dysnomia.studio/api/Games/covers/${id}`,
			);

			if (!res.ok) {
				throw new Error(await res.text());
			}

			if (res.status === 200) {
				const json = await res.json();
				setGameCover(json);
			}
			setLoading(false);
		}

		getGameCover();
	}, [id]);

	return { gameCover, loading };
}
