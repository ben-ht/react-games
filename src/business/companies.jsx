export async function getCompany(userToken, companyId) {
	const res = await fetch(
		`https://m1.dysnomia.studio/api/Companies/${companyId}`,
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
