import assert from "assert";
import { Board } from "../Board";
import { Color } from "../Color";
import { Move } from "../Move";
import { PlayerType } from "./PlayerType";

export abstract class Player {

  constructor(
    public readonly color: Color,
    public readonly board: Board,
    public readonly type: PlayerType,
    protected nextMove?: Move,
    private lastMove?: Move,
  ) { }

  move(move?: Move) {
    const playerMove = move || this.getNextMove();
    assert(playerMove);
    this.board.move(playerMove);
    this.nextMove = undefined;
    this.lastMove = playerMove;
  }
  getId(): string {
    return this.color === Color.White ? "White" : "Black";
  }

  getLastMove(): Move | undefined {
    return this.lastMove;
  }

  abstract copy(board: Board): Player;
  abstract getNextMove(): Move | undefined;
}
