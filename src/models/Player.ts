import assert from "assert";
import { Board } from "./Board";
import { Color } from "./Color";
import { Move } from "./Move";
import { PlayerType } from "./PlayerType";
import { Token } from "./Token";

export abstract class Player {

  constructor(
    public readonly token: Token,
    public readonly board: Board,
    public readonly type: PlayerType,
    protected nextMove?: Move,
  ) { }

  move() {
    assert(this.nextMove);
    this.board.move(this.nextMove);
  }
  getId(): string {
    return this.token.color === Color.White ? "White" : "Black";
  }
  abstract copy(board: Board): Player;
}
