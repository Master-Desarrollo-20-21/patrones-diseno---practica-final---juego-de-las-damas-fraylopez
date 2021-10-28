import { Board } from "./Board";
import { Color } from "./Color";
import { IMoveAlgorithm } from "./IMoveAlgorithm";
import { Move } from "./Move";
import { RandomMoveAlgorithm } from "./RandomMoveAlgorithm";

export class RandomMoveWithDummyHeuristicAlgorithm implements IMoveAlgorithm {
  private readonly randomAlgorithm: RandomMoveAlgorithm;
  constructor(private readonly maxAttempts: number = 10) {
    this.randomAlgorithm = new RandomMoveAlgorithm();
  }
  getNextMove(playerColor: Color, board: Board): Move {
    let bestMove: Move | undefined;
    let attempts = 0;
    do {
      const currentMove = this.randomAlgorithm.getNextMove(playerColor, board);
      if (currentMove && board.isCaptureMove(currentMove) || attempts > this.maxAttempts) {
        bestMove = currentMove;
      } else {
        attempts++;
      }
    } while (!bestMove);
    return bestMove;
  }
}
