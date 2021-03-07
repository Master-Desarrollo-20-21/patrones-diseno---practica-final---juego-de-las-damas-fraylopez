import { Board } from "./Board";
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
}

