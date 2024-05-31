export async function getCompanie(userToken, companieId) {
	const res = await fetch(
		`https://m1.dysnomia.studio/api/Companies/${companieId}`,
		{
			mode: 'cors',
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userToken}`,
			},
		},
	);

	if (!res.ok) {
		throw new Error(await res.text());
	}

	return await res.json();
}
