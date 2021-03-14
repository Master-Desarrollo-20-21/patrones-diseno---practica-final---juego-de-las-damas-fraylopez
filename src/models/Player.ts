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
    this.board.move(move || this.getNextMove());
    this.nextMove = undefined;
  }
  getId(): string {
    return this.color === Color.White ? "White" : "Black";
  }
  abstract copy(board: Board): Player;
  abstract getNextMove(): Move;
}
