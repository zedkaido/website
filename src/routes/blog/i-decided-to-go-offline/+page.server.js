import fs from 'fs';
export const prerender = true;

export async function load() {
	const [c1] = await Promise.all([
		fs.promises.readFile('static/code/e27-3c1-762/c1.txt', 'utf-8'),
	]);

	return {
		props: {
			c1,
		}
	};
}
