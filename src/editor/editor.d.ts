/*
	File: editor.d.ts
   	Author: @RealStyle15#5078 <- (My discord xd)
   	Created at: 05.05.2021, Wednesday
   	License: no, i haven't until
*/

declare module 'gd.ts' {

	export interface EditorUtils {

		/* General count of objects. */
		readonly objects: number;

		/* Level length at seconds, minutes, hours, etc. */
		readonly length: number;

		/* Level length kinds */
		readonly lengthKind: lengthKind;
	}

	export interface Level {
		/* Level name */
		name: string;

		/* Level description (or it has not) */
		desc?: string;

		isUploaded: boolean;

		isUnlisted: boolean;

		havePassword: [number & boolean];

		isCopy: boolean;

		readonly length: lengthKind;
	}

	export enum lengthKind {
		Tiny,
		Short,
		Medium,
		Long,
		XL
	}

	/* Music type */ 
	export type Music = {
		id: number;
		name: string;
		author: string;
		isDownloaded: boolean;
		isBlocked: boolean;
		size: number;
	}

	export interface EditorCategory {
		id: number;
		name: string;
	}
}