import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import useJwt from './useJwt';

export default function useUser() {
	const { user, setUser } = useContext(UserContext);
	const { jwt } = useJwt();
	useEffect(() => {
		async function getUser(userToken) {
			const res = await fetch(`https://m1.dysnomia.studio/api/Users/me`, {
				mode: 'cors',
				method: 'get',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${userToken}`,
				},
			});
			if (!res.ok) {
				throw new Error(await res.text());
			}
			const response = await res.json();
			setUser(response);
		}
		if (jwt !== undefined) {
			getUser(jwt);
		}
	}, [jwt, setUser]);
	return { user, setUser };
}
