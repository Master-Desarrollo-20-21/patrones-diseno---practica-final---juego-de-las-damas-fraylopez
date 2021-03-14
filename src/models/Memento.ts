import { Board } from "./Board";
import { Player } from "./Player";
import { Turn } from "./Turn";

export class Memento {
  constructor(
    public readonly board: Board,
    public readonly turn: Turn,
    public readonly players: Player[]
  ) {
    this.board = board.copy();
    this.turn = turn.copy(players);
  }
}
