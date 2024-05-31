import { useEffect, useState } from 'react';
import useJwt from './useJwt';
import { getCompanie } from '../business/companies';
export default function useGameCompanies({ id }) {
	const [gameCompanies, setGameCompanies] = useState([]);
	const { jwt } = useJwt();
	useEffect(() => {
		async function getComp() {
			if (jwt) {
				setGameCompanies(await getCompanie(jwt, id));
			}
		}

		getComp();
	}, [id, jwt]);
	return gameCompanies;
}
