/*
	File: trigger.ts
	Author: @RealStyle#5078
	Created at: 05.06.2021, Thursday
*/

import EditorCategory from ".editor";

export type Trigger = {
	id: number;
	name: string;
	group?: number;
	category: EditorCategory;
};