class Error {
	errorId: number;
	errorStr: string;

	constructor(errorId: number, errorStr: string) {
		this.errorId = errorId;
		this.errorStr = errorStr;
	}

	public error(s: string): void {
		let gd_err: string;
		if(s) {
			throw gd_err;
		}
		console.error(s);
	}
}