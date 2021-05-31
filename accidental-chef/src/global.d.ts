// <reference types=@sveltejs/kit />

interface Recipe {
	name: string;
	time: number;
	yield: number;
	intro: string;
	outro: string;
	image: string;
	ingredients: [
		{
			name: string;
			amount: [number, string?];
			noScale?: true;
		}
	];
	steps: [
		{
			content: string;
		}
	];
	breakglass: [
		{
			condition: string;
			content: string;
		}
	];
}
