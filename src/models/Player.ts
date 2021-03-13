import { Board } from "./Board";
import { Move } from "./Move";
import { PlayerType } from "./PlayerType";
import { Token } from "./Token";

export class Player {

  constructor(
    public readonly token: Token,
    public readonly board: Board,
    public readonly type: PlayerType
  ) { }
  move(move: Move) {
    this.board.move(move);
  }
}
