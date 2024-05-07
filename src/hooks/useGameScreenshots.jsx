import { useEffect, useState } from 'react';

export default function useGameScreenshots({ id }) {
	const [screenshots, setScreenshots] = useState([]);

	useEffect(() => {
		async function getGameScreenshots() {
			const res = await fetch(
				`https://m1.dysnomia.studio/api/Games/screenshots/${id}`,
			);

			if (!res.ok) {
				throw new Error(await res.text());
			}

			const json = await res.json();
			setScreenshots(json);
		}

		getGameScreenshots();
	}, []);

	return screenshots;
}
