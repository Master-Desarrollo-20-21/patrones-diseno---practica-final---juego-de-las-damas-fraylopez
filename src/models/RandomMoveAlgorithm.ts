import { Coordinate } from "../utils/Coordinate";
import { Board } from "./Board";
import { Color } from "./Color";
import { IMoveAlgorithm } from "./IMoveAlgorithm";
import { Move } from "./Move";

export class RandomMoveAlgorithm implements IMoveAlgorithm {
  getNextMove(playerColor: Color, board: Board): Move {
    let move: Move | undefined;
    do {
      const randomCoordinateFrom = this.getRandomCoordinate(board.getSize());
      const randomCoordinateTo = this.getRandomCoordinate(board.getSize());
      const token = board.getToken(randomCoordinateFrom);
      if (token.color !== playerColor) {
        continue;
      }
      const randomMove = new Move(token, randomCoordinateFrom, randomCoordinateTo);
      move = randomMove.isValid && board.isValidMove(randomMove) ? randomMove : undefined;
    } while (!move);
    // console.log("AI moves: " + JSON.stringify(move));
    return move;
  }

  private getRandomCoordinate(boardSize: number) {
    return new Coordinate(
      Math.floor(Math.random() * boardSize),
      Math.floor(Math.random() * boardSize)
    );
  }
}
