/*
	File: trigger.ts
	Author: @RealStyle#5078
	Created at: 05.06.2021, Thursday
*/

import { EditorCategory as Category } from "editor.d.ts";

export type Trigger = {
	id: number;
	name: string;
	group?: number;
	category: Category;
};