import { useEffect, useState } from 'react';
import useJwt from './useJwt';
import { postPlatforms } from '../business/platforms';
import getAllGameDetails from '../business/gameDetails';

export default function useGameDetails({ id }) {
	const [gameDetails, setGameDetails] = useState([]);
	const { jwt } = useJwt();

	useEffect(() => {
		async function getGameDetails() {
			const json = await getAllGameDetails(jwt, id);
			let pf = await postPlatforms(jwt, json?.platforms.ids);
			json.platformsDetail = pf;
			setGameDetails(json);
		}
		if (jwt !== undefined) {
			getGameDetails();
		}
	}, [id, jwt]);
	return gameDetails;
}
