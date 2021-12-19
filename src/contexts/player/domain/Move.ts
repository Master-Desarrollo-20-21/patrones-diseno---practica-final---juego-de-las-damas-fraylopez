import { Coordinate } from "../_shared/Coordinate";
import { Board } from "./Board";
import { Color } from "./Color";
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
    return this.token.isKing || this.length <= 2;
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
        this.from.column + this.unitVector.column ,
      )
    );
  }

  isKingMove(board: Board) {
    return this.token.color === Color.White && this.to.row === board.getSize() - 1 ||
      this.token.color === Color.Black && this.to.row === 0;
  }

  isMovingForward(board: Board): boolean {
    return board.isCaptureMove(this) || this.token.isKing || Math.pow(-1, this.token.color) * (this.to.row - this.from.row) > 0;
  }
  isWithinBoard(board: Board): boolean {
    return this.from.row >= 0 && this.from.column >= 0 && this.to.row < board.getSize() && this.to.column < board.getSize();
  }

  getScore(board: Board): number {
    const score = 0 +
      (this.isKingMove(board) ? 2 : 0) +
      (board.isCaptureMove(this) ? 1 : 0)
      ;

    return score;
  }

  private get unitVector(): Coordinate {
    return new Coordinate(
      (this.to.row - this.from.row) / this.length,
      (this.to.column - this.from.column) / this.length,
    );
  }

  private get isDiagonal() {
    return this.from.row !== this.to.row &&
      Math.abs(this.getVector().row) - Math.abs(this.getVector().column) === 0;
  }

}