import { Board } from "../Board";
import { Color } from "../Color";
import { Move } from "../Move";
import { Player } from "./Player";
import { PlayerType } from "./PlayerType";

export class HumanPlayer extends Player {

  constructor(
    color: Color,
    board: Board,
    type: PlayerType,
    nextMove?: Move
  ) {
    super(color, board, type, nextMove);
  }

  setNextMove(move: Move) {
    this.nextMove = move;
  }

  getNextMove(): Move | undefined {
    return this.nextMove;
  }

  copy(board: Board) {
    return new HumanPlayer(this.color, board, this.type, this.nextMove);
  }
}
