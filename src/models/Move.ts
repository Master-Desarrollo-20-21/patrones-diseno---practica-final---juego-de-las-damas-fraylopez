import { Coordinate } from "../utils/Coordinate";
import { Token } from "./Token";

export class Move {

  constructor(
    public readonly token: Token,
    public readonly from: Coordinate,
    public readonly to: Coordinate,
  ) { }

  getVector(): Coordinate {
    return new Coordinate((this.to.row - this.from.row) / this.length, (this.to.column - this.from.column) / this.length);
  }

  get isProperLength() {
    return this.length <= 2 || this.token.isKing;
  }

  get length(): number {
    return Math.abs(this.from.row - this.to.row);
  }
  get isValid(): boolean {
    return this.isDiagonal && this.isProperLength;
  }

  get unitMovement() {
    return new Move(
      this.token,
      this.from,
      new Coordinate(
        this.from.row + this.unitVector.row,
        this.from.column + this.unitVector.column
      )
    );
  }

  private get unitVector(): Coordinate {
    return new Coordinate(Math.abs(this.from.row - this.to.row), Math.abs(this.from.column - this.to.column),);
  }

  private get isDiagonal() {
    const v = this.getVector();
    return this.from.row != this.to.row &&
      Math.abs(this.getVector().row) - Math.abs(this.getVector().column) === 0;
  }

}