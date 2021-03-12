import { Coordinate } from "../utils/Coordinate";
import { Board } from "./Board";
import { Color } from "./Color";
import { PlayerType } from "./PlayerType";
import { Token } from "./Token";
import { Turn } from "./Turn";

export class Game {

  private readonly board: Board;
  private readonly turn: Turn;

  constructor() {
    this.board = new Board();
    this.turn = new Turn(this.board);
  }

  setNumPlayers(players: number) {
    this.turn.setNumPlayers(players);
  }

  getCurrentPlayerType(): PlayerType {
    return this.turn.getCurrentPlayerType();
  }
  getBoardSize(): number {
    return this.board.getSize();
  }
  getBoardColor(coordinate: Coordinate): Color {
    return this.board.getBoardColor(coordinate);
  }
  isEmpty(coordinate: Coordinate): boolean {
    return this.board.isEmpty(coordinate);
  }
  getToken(coordinate: Coordinate): Token {
    return this.board.getToken(coordinate);
  }
  isGameWon(color: Color): boolean {
    return this.board.isGameWon(color);
  }

}

