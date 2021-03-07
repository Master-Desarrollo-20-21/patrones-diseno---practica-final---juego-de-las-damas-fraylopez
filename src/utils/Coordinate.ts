import { Direction } from "./Direction";

export class Coordinate {

	constructor(
		public readonly row: number,
		public readonly column: number,
	) { }

	protected getDirection(coordinate: Coordinate): Direction {
		if (this.inHorizontal(coordinate)) {
			return Direction.HORIZONTAL;
		}
		if (this.inVertical(coordinate)) {
			return Direction.VERTICAL;
		}
		if (this.inMainDiagonal() && coordinate.inMainDiagonal()) {
			return Direction.MAIN_DIAGONAL;
		}
		return Direction.NULL;
	}

	private inMainDiagonal(): boolean {
		return this.row - this.column == 0;
	}

	private inVertical(coordinate: Coordinate): boolean {
		return this.column == coordinate.column;
	}

	private inHorizontal(coordinate: Coordinate): boolean {
		return this.row == coordinate.row;
	}

	public getRow(): number {
		return this.row;
	}

	public getColumn(): number {
		return this.column;
	}

	public equals(coordinate: Coordinate): boolean {
		return this.column == coordinate.column && this.row == coordinate.row;
	}
}
