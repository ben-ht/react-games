import { useEffect, useState } from 'react';
import useJwt from './useJwt';
import { getCompanie } from '../business/companies';
export default function useGameCompanies({ companieId }) {
	const [gameCompanies, setGameCompanies] = useState([]);
	const { jwt } = useJwt();
	useEffect(() => {
		if (jwt) {
			setGameCompanies(getCompanie(jwt, companieId));
		}
	}, [companieId, jwt]);
	return gameCompanies;
}
