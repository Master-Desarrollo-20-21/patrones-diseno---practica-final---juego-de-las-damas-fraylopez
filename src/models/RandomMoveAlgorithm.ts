import { Coordinate } from "../utils/Coordinate";
import { Board } from "./Board";
import { Color } from "./Color";
import { IMoveAlgorithm } from "./IMoveAlgorithm";
import { Move } from "./Move";

export class RandomMoveAlgorithm implements IMoveAlgorithm {
  getNextMove(playerColor: Color, board: Board): Move {
    let move: Move | undefined;
    do {
      const randomCoordinateFrom = this.getRandomCoordinate();
      const randomCoordinateTo = this.getRandomCoordinate();
      const token = board.getToken(randomCoordinateFrom);
      if (token.color !== playerColor) {
        continue;
      }
      const randomMove = new Move(token, randomCoordinateFrom, randomCoordinateTo);
      move = randomMove.isValid && board.isValidMove(randomMove) ? randomMove : undefined;
    } while (!move);
    return move;
  }

  private getRandomCoordinate() {
    return new Coordinate(
      Math.floor(Math.random() * Board.SIZE),
      Math.floor(Math.random() * Board.SIZE)
    );
  }
}
