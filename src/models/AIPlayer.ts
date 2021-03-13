import assert from "assert";
import { Board } from "./Board";
import { IMoveAlgorithm } from "./IMoveAlgorithm";
import { Move } from "./Move";
import { Player } from "./Player";
import { PlayerType } from "./PlayerType";
import { RandomMoveAlgorithm } from "./RandomMoveAlgorithm";
import { Token } from "./Token";

export class AIPlayer extends Player {
  private algorithm: IMoveAlgorithm;
  constructor(
    token: Token,
    board: Board,
    type: PlayerType,
    nextMove?: Move,
  ) {
    super(token, board, type, nextMove);
    this.algorithm = new RandomMoveAlgorithm();
  }

  getNextMove(): Move {
    return this.algorithm.getNextMove(this.token.color, this.board);
  }

  copy(board: Board) {
    return new AIPlayer(this.token, board, this.type, this.nextMove);
  }
}
