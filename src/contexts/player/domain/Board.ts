import assert from "assert";
import { Coordinate } from "../_shared/Coordinate";
import { Color } from "./Color";
import { Move } from "./Move";
import { NullToken } from "./NullToken";
import { Token } from "./Token";

export class Board {

  private static SIZE = 8;
  private coordinates: Array<Array<Token | undefined>>;

  constructor(coordinates?: Array<Array<Token | undefined>>) {
    this.coordinates = coordinates || [];
    const tokensPerPlayer = Board.SIZE / 2 * (Board.SIZE / 2 - 1);
    if (!coordinates) {
      let addedTokens = 0;
      for (let i = 0; i < Board.SIZE; i++) {
        const row: Array<Token | undefined> = this.coordinates[i] = [];
        for (let j = 0; j < Board.SIZE; j++) {
          const isOddCoordinate = (i + j) % 2 !== 0;
          const hasToken = isOddCoordinate &&
            (i < Board.SIZE / 2 - 1 || i > Board.SIZE / 2);
          if (hasToken) {
            const tokenColor = addedTokens < tokensPerPlayer ? Color.White : Color.Black;
            row.push(new Token(tokenColor));
            addedTokens++;
          } else {
            row.push(undefined);
          }
        }
      }
    }
  }

  getSize(): number {
    return Board.SIZE;
  }

  getBoardColor(coordinate: Coordinate): Color {
    return (coordinate.row + coordinate.column) % 2 === 0 ? Color.White : Color.Black;
  }

  isEmpty(coordinate: Coordinate): boolean {
    const token = this.coordinates[coordinate.row][coordinate.column];
    return !token;
  }


  getToken(coordinate: Coordinate): Token {
    return this.coordinates[coordinate.row][coordinate.column] || new NullToken();
  }

  removeToken(coordinate: Coordinate) {
    this.coordinates[coordinate.row][coordinate.column] = undefined;
  }

  setToken(coordinate: Coordinate, token: Token) {
    this.coordinates[coordinate.row][coordinate.column] = token;
  }

  isGameWon(color: Color): boolean {
    const colorExists = !!this.coordinates.some(row => row.some(t => t?.color === color));
    const otherColorDoesNotExists = !this.coordinates.find(row => row.find(t => t && t.color !== color));
    return colorExists && otherColorDoesNotExists;
  }
  isValidMove(move: Move) {
    return move.isValid &&
      move.isWithinBoard(this) &&
      move.isMovingForward(this) &&
      !this.isEmpty(move.from) &&
      this.isEmpty(move.to) &&
      this.isValidJump(move);
  }

  move(move: Move) {
    assert(!this.isEmpty(move.from), "Empty from");
    assert(this.isEmpty(move.to), "Not empty to");
    assert(move.isValid, "wrong move!");

    const token = this.getToken(move.from);
    this.removeToken(move.from);
    this.setToken(move.to, token);
    this.checkCapture(move);
    this.ckeckKing(move);
  }

  checkCapture(move: Move) {
    const capturableCoordinate = new Coordinate(move.unitMovement.to.row, move.unitMovement.to.column);
    const capturableToken = this.getToken(capturableCoordinate);
    if (capturableToken && capturableToken.color !== move.token.color) {
      this.removeToken(capturableCoordinate);
    }
  }
  ckeckKing(move: Move) {
    if (move.isKingMove(this)) {
      this.getToken(move.to).turnToKing();
    }
  }

  copy(): Board {
    const coordinatesCopy: Array<Array<Token | undefined>> = [];
    for (let i = 0; i < Board.SIZE; i++) {
      coordinatesCopy[i] = this.coordinates[i].slice();
    }
    return new Board(coordinatesCopy);
  }
  getCoordinates() {
    return this.coordinates;
  }

  setCoordinates(coordinates: (Token | undefined)[][]) {
    this.coordinates = coordinates;
  }

  isCaptureMove(move: Move) {
    const capturableToken = this.getToken(move.unitMovement.to);
    return move.length === 2 && !capturableToken.isNull && capturableToken.color !== move.token.color;
  }

  private isValidJump(move: Move) {
    const unitToMove = move.length === 1 && this.getToken(move.to).isNull;
    return unitToMove || this.isCaptureMove(move);
  }
}
