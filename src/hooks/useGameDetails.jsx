import { useEffect, useState } from 'react';
import useJwt from './useJwt';
import { getPlatforms } from '../business/platforms';
import getAllGameDetails from '../business/gameDetails';

export default function useGameDetails({ id }) {
	const [gameDetails, setGameDetails] = useState([]);
	const { jwt } = useJwt();

	useEffect(() => {
		async function getGameDetails() {
			const res = await fetch(
				`https://m1.dysnomia.studio/api/Games/${id}`,
				{
					mode: 'cors',
					method: 'get',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${jwt}`,
					},
				},
			);

			if (!res.ok) {
				throw new Error(await res.text());
			}

			const details = await res.json();

			details.platformsDetail = await getPlatforms(
				jwt,
				details?.platforms.ids,
			);
			setGameDetails(details);
		}

		if (jwt !== undefined) {
			getGameDetails();
		}
	}, [id, jwt]);

	return gameDetails;
}
