import { fileformat as ff } from "fileformats";

export type Music = {
	id: number;
	name: string;
	filename: string;
	file_format: string;
}

export interface SongInfo {
	songID: number;
	secret: string;
}

let MusicList = [
	{ id: 0, name: "Stay Inside Me", filename: `StayInsideMe${ff}` },
	{ id: 1, name: "Stereo Medness", filename: `StereoMadness${ff}` },
	{ id: 2, name: "Back On Track", filename: `BackOnTrack${ff}` },
	{ id: 3, name: "Dry Out", filename: `DryOut${ff}` },
	{ id: 4, name: "Base After Base", filename: `BaseAfterBase${ff}` },
	{ id: 5, name: "Cant let Go", filename: `CantLetGo${ff}` },
	{ id: 6, name: "Jumper", filename: `Jumper${ff}`},
	{ id: 7, name: "Time Machine", filename: `TimeMachine${ff}` },
]
