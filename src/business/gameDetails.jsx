export default async function getAllGameDetails(userToken, id) {
	const res = await fetch(`https://m1.dysnomia.studio/api/Games/${id}`, {
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

	return await res.json();
}
