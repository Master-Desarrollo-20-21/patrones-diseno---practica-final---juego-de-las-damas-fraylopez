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

  get length(): number {
    return Math.abs(this.from.row - this.to.row);
  }

  private get unitVector(): Coordinate {
    return new Coordinate(Math.abs(this.from.row - this.to.row), Math.abs(this.from.column - this.to.column),);
  }
}