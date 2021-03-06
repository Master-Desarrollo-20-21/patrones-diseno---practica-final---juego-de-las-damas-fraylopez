import assert from "assert";

export class ClosedInterval {

	constructor(
		private readonly min: number,
		private readonly max: number,
	) {
		assert(min <= max)
	}

	public includes(value: number): boolean {
		return this.min <= value && value <= this.max;
	}
}
