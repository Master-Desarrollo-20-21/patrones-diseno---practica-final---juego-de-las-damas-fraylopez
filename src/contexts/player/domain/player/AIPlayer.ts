import { ConfigurableDependencies } from "../../infrastructure/ConfigurableDependencies";
import { Board } from "../Board";
import { Color } from "../Color";
import { IMoveAlgorithm } from "../IMoveAlgorithm";
import { Move } from "../Move";
import { Player } from "./Player";
import { PlayerType } from "./PlayerType";


export class AIPlayer extends Player {
  private algorithm: IMoveAlgorithm;
  constructor(
    color: Color,
    board: Board,
    type: PlayerType,
    nextMove?: Move,
  ) {
    super(color, board, type, nextMove);
    this.algorithm = ConfigurableDependencies.getInstance().getAIMoveAlgorithm();
  }

  getNextMove(): Move {
    return this.algorithm.getNextMove(this.color, this.board);
  }

  copy(board: Board) {
    return new AIPlayer(this.color, board, this.type, this.nextMove);
  }
}
