import { useState, createContext, useEffect } from 'react';

export const JwtContext = createContext();

export default function JwtContextProvider({ children }) {
	let [jwt, setJwt] = useState();

	useEffect(() => {
		let j = localStorage.getItem('jwt');
		if ((jwt !== undefined && !j) || j === 'undefined') {
			localStorage.setItem('jwt', jwt);
		} else if (j !== undefined && jwt !== undefined) {
			let timestamp = JSON.parse(atob(j.split('.')[1])).exp;
			const id = setInterval(async () => {
				let dateNow = Date.now();
				if (timestamp > dateNow) {
					localStorage.removeItem('jwt');
					let newToken = await renewToken(jwt);
					console.log(newToken);
					setJwt(newToken);
					localStorage.setItem('jwt', newToken);
				}
			}, 300000);
			return () => clearInterval(id);
		} else if (!jwt && j) {
			setJwt(j);
		}
	}, [jwt]);

	return (
		<JwtContext.Provider value={{ jwt, setJwt }}>
			{children}
		</JwtContext.Provider>
	);
}

async function renewToken(jwt) {
	const res = await fetch(`https://m1.dysnomia.studio/api/Users/renewToken`, {
		mode: 'cors',
		method: 'get',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${jwt}`,
		},
	});

	if (!res.ok) {
		throw new Error(await res.text());
	} else {
		return await res.text();
	}
}
