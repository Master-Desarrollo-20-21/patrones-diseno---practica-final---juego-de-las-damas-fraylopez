import { Coordinate } from "../utils/Coordinate";
import { Color } from "./Color";
import { NullToken } from "./NullToken";
import { Token } from "./Token";

export class Board {

  private static SIZE = 8;
  private static TOKENS_PER_PLAYER = 12;
  private coordinates: Array<Array<Token | undefined>>;

  constructor() {
    this.coordinates = [];
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
    return this.coordinates[coordinate.row][coordinate.column] || new NullToken();
  }

  isGameWon(color: Color): boolean {
    const colorExists = !!this.coordinates.find(row => row.find(t => t?.color === color));
    const otherColorDoesNotExists = !this.coordinates.find(row => row.find(t => t?.color !== color));
    return colorExists && otherColorDoesNotExists;
  }
}
