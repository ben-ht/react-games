import { useState, useEffect } from 'react';
import { getCompany } from '../business/companies';
import useJwt from './useJwt';

export default function useGameCompanies(game) {
	const [companies, setCompanies] = useState([]);

	const { jwt } = useJwt();

	useEffect(() => {
		if (game === undefined) {
			return;
		}

		async function getCompanies() {
			const companiesList = [];
			if (Array.isArray(game.involvedCompanies?.ids)) {
				await Promise.allSettled(
					game.involvedCompanies?.ids.map(async (company) => {
						const res = await getCompany(jwt, company);
						companiesList.push(res);
					}),
				);
				setCompanies(companiesList);
			}
		}

		getCompanies();
	}, [jwt, game]);

	return companies;
}
