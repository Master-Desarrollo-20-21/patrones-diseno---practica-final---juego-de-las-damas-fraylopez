import { Board } from "./Board";
import { Color } from "./Color";
import { Move } from "./Move";

export interface IMoveAlgorithm {
  getNextMove(playerColor: Color, board: Board): Move;
}
