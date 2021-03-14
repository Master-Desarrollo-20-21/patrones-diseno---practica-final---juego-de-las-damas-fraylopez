import assert from "assert";
import { Board } from "./Board";
import { Color } from "./Color";
import { Move } from "./Move";
import { PlayerType } from "./PlayerType";

export abstract class Player {

  constructor(
    public readonly color: Color,
    public readonly board: Board,
    public readonly type: PlayerType,
    protected nextMove?: Move,
  ) { }

  move(move?: Move) {
    const playerNextMove = move || this.getNextMove();
    assert(playerNextMove);
    this.board.move(playerNextMove!);
    this.nextMove = undefined;
  }
  getId(): string {
    return this.color === Color.White ? "White" : "Black";
  }
  abstract copy(board: Board): Player;
  abstract getNextMove(): Move | undefined;
}
