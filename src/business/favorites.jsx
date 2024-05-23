export async function addToFavorites(userToken, gameId) {
	const res = await fetch(
		`https://m1.dysnomia.studio/api/Users/favorites/add/${gameId}`,
		{
			mode: 'cors',
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userToken}`,
			},
			body: JSON.stringify(gameId),
		},
	);
	if (!res.ok) {
		throw new Error(await res.text());
	}

	return await res.text();
}

export async function removeFromFavorites(userToken, gameId) {
	const res = await fetch(
		`https://m1.dysnomia.studio/api/Users/favorites/remove/${gameId}`,
		{
			mode: 'cors',
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userToken}`,
			},
			body: JSON.stringify(gameId),
		},
	);
	if (!res.ok) {
		throw new Error(await res.text());
	}

	return await res.json();
}
