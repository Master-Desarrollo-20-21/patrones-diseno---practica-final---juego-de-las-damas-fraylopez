import { Coordinate } from "../utils/Coordinate";
import { Board } from "./Board";
import { Color } from "./Color";
import { IMoveAlgorithm } from "./IMoveAlgorithm";
import { Move } from "./Move";

export class RandomMoveWithDummyHeuristicAlgorithm implements IMoveAlgorithm {
  constructor(private readonly maxAttempts: number = 10) { }
  getNextMove(playerColor: Color, board: Board): Move {
    let bestMove: Move | undefined;
    let attempts = 0;
    do {
      const randomCoordinateFrom = this.getRandomCoordinate(board.getSize());
      const randomCoordinateTo = this.getRandomCoordinate(board.getSize());
      const token = board.getToken(randomCoordinateFrom);
      if (token.color !== playerColor) {
        continue;
      }
      const randomMove = new Move(token, randomCoordinateFrom, randomCoordinateTo);
      const currentMove = randomMove.isValid && board.isValidMove(randomMove) ? randomMove : undefined;
      if (currentMove && board.isCaptureMove(currentMove) || attempts > this.maxAttempts) {
        bestMove = currentMove;
      } else {
        attempts++;
      }
    } while (!bestMove);
    return bestMove;
  }

  private getRandomCoordinate(boardSize: number) {
    return new Coordinate(
      Math.floor(Math.random() * boardSize),
      Math.floor(Math.random() * boardSize)
    );
  }
}
