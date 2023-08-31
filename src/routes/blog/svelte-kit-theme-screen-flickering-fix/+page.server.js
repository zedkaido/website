import fs from 'fs';
export const prerender = true;

export async function load() {
	const [c1, c2, c3, c4, c5] = await Promise.all([
		fs.promises.readFile('static/code/217-d08-f1d/c1.txt', 'utf-8'),
		fs.promises.readFile('static/code/217-d08-f1d/c2.txt', 'utf-8'),
		fs.promises.readFile('static/code/217-d08-f1d/c3.txt', 'utf-8'),
		fs.promises.readFile('static/code/217-d08-f1d/c4.txt', 'utf-8'),
		fs.promises.readFile('static/code/217-d08-f1d/c5.txt', 'utf-8'),
	]);

	return {
		props: {
			c1,
			c2,
			c3,
			c4,
			c5,
		}
	};
}
