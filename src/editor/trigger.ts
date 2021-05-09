/*
	File: trigger.ts
	Author: @RealStyle#5078
	Created at: 05.06.2021, Thursday
*/

import EditorCategory = require("../editor/editor");

export type Trigger = {
	id: number;
	name: string;
	group?: number;
	category: gd_ts.EditorCategory;
};