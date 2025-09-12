const TOKEN = import.meta.env.API_KEY;
const API_URL = 'https://rickandmortyapi.com/api';

export const query = async (path) => {
	const url = `${API_URL}${path}`;

	try {
		const res = await fetch(url, {
			headers: {
				Authorization: `Bearer ${TOKEN}`,
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();
		return data;
	} catch (error) {
		console.error('Error fetching API:', error);
	}
};
