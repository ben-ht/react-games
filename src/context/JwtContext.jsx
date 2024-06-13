import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

export const JwtContext = createContext();

export default function JwtContextProvider({ children }) {
	const [jwt, setJwt] = useState(() => {
		const token = localStorage.getItem('jwt');
		return token ? token : null;
	});

	useEffect(() => {
		const renewToken = async (currentJwt) => {
			try {
				const res = await fetch(
					`https://m1.dysnomia.studio/api/Users/renewToken`,
					{
						mode: 'cors',
						method: 'get',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${currentJwt}`,
						},
					},
				);

				if (!res.ok) {
					throw new Error(await res.text());
				} else {
					return await res.text();
				}
			} catch (error) {
				console.error('Error renewing token:', error);
				return null;
			}
		};

		const scheduleTokenRenewal = (token) => {
			const decodedToken = JSON.parse(atob(token.split('.')[1]));
			const expirationTime = decodedToken.exp * 1000;
			const currentTime = Date.now();
			const timeUntilExpiration = expirationTime - currentTime;
			const renewalTime = timeUntilExpiration - 10 * 60 * 1000;

			const timeoutId = setTimeout(async () => {
				const newToken = await renewToken(token);
				if (newToken) {
					setJwt(newToken);
					localStorage.setItem('jwt', newToken);
					scheduleTokenRenewal(newToken);
				}
			}, renewalTime);

			return () => clearTimeout(timeoutId);
		};

		const checkTokenExpiration = (token) => {
			if (token) {
				const decodedToken = JSON.parse(atob(token.split('.')[1]));
				const expirationTime = decodedToken.exp * 1000;
				const currentTime = Date.now();
				if (expirationTime <= currentTime) {
					setJwt();
					localStorage.removeItem('jwt');
				} else {
					scheduleTokenRenewal(token);
				}
			}
		};

		let storedJwt = localStorage.getItem('jwt');
		if ((jwt && !storedJwt) || storedJwt === 'undefined') {
			localStorage.setItem('jwt', jwt);
		} else if (storedJwt && jwt) {
			checkTokenExpiration(jwt);
		} else if (!jwt && storedJwt) {
			setJwt(storedJwt);
			checkTokenExpiration(storedJwt);
		}
	}, [jwt]);

	return (
		<JwtContext.Provider value={{ jwt, setJwt }}>
			{children}
		</JwtContext.Provider>
	);
}

JwtContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
