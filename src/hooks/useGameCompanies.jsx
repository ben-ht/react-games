import { useEffect, useState } from 'react';
import { getCompany } from '../business/companies';
import useJwt from './useJwt';
export default function useGameCompanies({ id }) {
	const [gameCompanies, setGameCompanies] = useState([]);
	const { jwt } = useJwt();
	useEffect(() => {
		async function getComp() {
			if (jwt) {
				setGameCompanies(await getCompany(jwt, id));
			}
		}

		getComp();
	}, [id, jwt]);
	return gameCompanies;
}
