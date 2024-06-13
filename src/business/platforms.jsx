export async function postPlatforms(userToken, platforms) {
	const res = await fetch(`https://m1.dysnomia.studio/api/Games/platforms`, {
		mode: 'cors',
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${userToken}`,
		},
		body: JSON.stringify(platforms),
	});
	if (!res.ok) {
		throw new Error(await res.json());
	}

	return await res.json();
}
