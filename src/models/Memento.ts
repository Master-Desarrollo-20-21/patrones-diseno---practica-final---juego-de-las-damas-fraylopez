import { Board } from "./Board";
import { Player } from "./Player";
import { Turn } from "./Turn";

export class Memento {
  private readonly board: Board;
  private readonly turn: Turn;
  constructor(
    board: Board,
    turn: Turn,
    private readonly players: Player[]
  ) {
    this.board = board.copy();
    this.turn = turn.copy(players);
  }
}
