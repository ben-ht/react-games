export async function createUser(user) {
	const res = await fetch('https://m1.dysnomia.studio/api/Users/register', {
		mode: 'cors',
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user),
	});
	if (!res.ok) {
		throw new Error(await res.text());
	}
	return await res.text();
}

export async function loginUser(user) {
	const res = await fetch('https://m1.dysnomia.studio/api/Users/auth', {
		mode: 'cors',
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user),
	});
	if (!res.ok) {
		throw new Error(await res.text());
	}
	return await res.text();
}
