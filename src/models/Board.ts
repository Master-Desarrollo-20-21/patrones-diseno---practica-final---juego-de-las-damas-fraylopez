import assert from "assert";
import { Coordinate } from "../utils/Coordinate";
import { Color } from "./Color";
import { Move } from "./Move";
import { NullToken } from "./NullToken";
import { Token } from "./Token";

export class Board {
  public static SIZE = 8;
  private static TOKENS_PER_PLAYER = 12;
  private coordinates: Array<Array<Token | undefined>>;

  constructor(coordinates?: Array<Array<Token | undefined>>) {
    this.coordinates = coordinates || [];
    if (!coordinates) {
      let addedTokens = 0;
      for (let i = 0; i < Board.SIZE; i++) {
        const row: Array<Token | undefined> = this.coordinates[i] = [];
        for (let j = 0; j < Board.SIZE; j++) {
          const hasToken = (i + j) % 2 !== 0 && (i < 3 || i > 4);
          if (hasToken) {
            const tokenColor = addedTokens < Board.TOKENS_PER_PLAYER ? Color.White : Color.Black;
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
    return !this.coordinates[coordinate.row][coordinate.column];
  }

  getToken(coordinate: Coordinate): Token {
    try {
      return this.coordinates[coordinate.row][coordinate.column] || new NullToken();

    } catch (error) {
      console.log(error);
      throw error;
    }
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
    return !this.isEmpty(move.from) && this.isEmpty(move.to) && this.isValidJump(move);
  }

  move(move: Move) {
    assert(!this.isEmpty(move.from), "Empty from");
    assert(this.isEmpty(move.to), "Empty to");
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
    if (move.isKingMove()) {
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

  private isValidJump(move: Move) {
    const unitToMove = move.length === 1 && this.getToken(move.to).isNull;
    const doubleToCapture = move.length === 2 && this.getToken(move.unitMovement.to).color !== move.token.color;
    return unitToMove || doubleToCapture;
  }
}
