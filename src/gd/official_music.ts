import { fileformat } from "fileformats";

export type Music = {
	id: number;
	name: string;
	filename: string;
	file_format: string;
}

let MusicList = [
	{ id: 0, name: "Stay Inside Me", filename: `StayInsideMe${fileformat}` },
	{ id: 1, name: "Stereo Medness", filename: `StereoMadness${fileformat}` },
	{ id: 2, name: "Back On Track", filename: `BackOnTrack${fileformat}` },
	{ id: 3, name: "Dry Out", filename: `DryOut${fileformat}` },
	{ id: 4, name: "Base After Base", filename: `BaseAfterBase${fileformat}` },
	{ id: 5, name: "Cant let Go", filename: `CantLetGo${fileformat}` }
]
