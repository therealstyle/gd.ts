declare module 'gd.ts';

export enum Format {
	mp3,
	ogg,
	plist,
	png,
	dll
}

let fileformat: string = `.${Format}`;