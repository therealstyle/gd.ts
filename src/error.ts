class gd_error {
	errorId: number;
	errorStr: string;

	constructor(errorId: number, errorStr: string) {
		this.errorId = errorId;
		this.errorStr = errorStr;
	}

	public error() {}
}