import { useEffect, useState } from 'react';
import { getCompanie } from '../../business/companies';
import useJwt from '../../hooks/useJwt';

export default function GameCompanies({ companyId }) {
	const [gameCompanie, setGameCompanie] = useState();
	const { jwt } = useJwt();
	useEffect(() => {
		async function getComp() {
			const compagnie = await getCompanie(jwt, companyId);

			setGameCompanie(compagnie);
		}
		getComp();
	}, [companyId, jwt]);

	return gameCompanie;
}
