import {fileformat} from "fileformats";

export type Song = {
	id: number;
	name: string;
	author: string;
	filename: string;
	file_format: string;
}

export interface SongInfo {
	songID: number;
	secret: string;
}

let SongList = [
	{ id: 0, name: "Stay Inside Me", filename: `StayInsideMe${fileformat}` },
	{ id: 1, name: "Stereo Medness", filename: `StereoMadness${fileformat}` },
	{ id: 2, name: "Back On Track", filename: `BackOnTrack${fileformat}` },
	{ id: 3, name: "Dry Out", filename: `DryOut${fileformat}` },
	{ id: 4, name: "Base After Base", filename: `BaseAfterBase${fileformat}` },
	{ id: 5, name: "Cant let Go", filename: `CantLetGo${fileformat}` },
	{ id: 6, name: "Jumper", filename: `Jumper${fileformat}`},
	{ id: 7, name: "Time Machine", filename: `TimeMachine${fileformat}` },
]
