import fs from 'fs';
export const prerender = true;

export async function load() {
	const [c1, c2, c3, c4, c5] = await Promise.all([
		fs.promises.readFile('static/code/1bf27c90-485e-45bc-aa27-28138b7c0474/c1.txt', 'utf-8'),
		fs.promises.readFile('static/code/1bf27c90-485e-45bc-aa27-28138b7c0474/c2.txt', 'utf-8'),
		fs.promises.readFile('static/code/1bf27c90-485e-45bc-aa27-28138b7c0474/c3.txt', 'utf-8'),
		fs.promises.readFile('static/code/1bf27c90-485e-45bc-aa27-28138b7c0474/c4.txt', 'utf-8'),
		fs.promises.readFile('static/code/1bf27c90-485e-45bc-aa27-28138b7c0474/c5.txt', 'utf-8'),
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
