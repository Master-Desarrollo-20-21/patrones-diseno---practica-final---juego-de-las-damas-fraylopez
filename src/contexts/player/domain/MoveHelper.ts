import assert from "assert";
import { Coordinate } from "../_shared/Coordinate";
import { Board } from "./Board";
import { Color } from "./Color";
import { Move } from "./Move";

export class MoveHelper {
  private currentPlayerColor!: Color;
  constructor(private readonly board: Board) { }

  getHelpMove(currentPlayerColor: Color): Move {
    this.currentPlayerColor = currentPlayerColor;
    const possibleMoves = this.getPossibleMoves();
    const bestMove = this.getBestMove(possibleMoves);
    return bestMove;
  }

  private getPossibleMoves() {
    const currentPlayerTokensCoordinates: Coordinate[] = this.getCurrentPlayerTokens();
    const moves: Move[] = [];
    currentPlayerTokensCoordinates.forEach(coordinate => {
      moves.push(...this.getTokenMoves(coordinate));
    });
    return moves;
  }

  private getTokenMoves(coordinate: Coordinate): Move[] {
    const moves: Move[] = [];
    const token = this.board.getToken(coordinate);
    const basicVerticalMoveLength = token.color === Color.White ? 1 : -1;
    moves.push(new Move(
      token,
      coordinate,
      new Coordinate(coordinate.row + basicVerticalMoveLength, coordinate.column + 1)
    ));
    moves.push(new Move(
      token,
      coordinate,
      new Coordinate(coordinate.row + basicVerticalMoveLength, coordinate.column - 1)
    ));
    moves.push(new Move(
      token,
      coordinate,
      new Coordinate(coordinate.row + 2 * basicVerticalMoveLength, coordinate.column + 2)
    ));
    moves.push(new Move(
      token,
      coordinate,
      new Coordinate(coordinate.row + 2 * basicVerticalMoveLength, coordinate.column - 2)
    ));
    return moves
      .filter(m => this.board.isValidMove(m));
  }

  private getBestMove(possibleMoves: Move[]): Move {
    assert(possibleMoves.length);
    return possibleMoves
      .map(m => ({ move: m, score: m.getScore(this.board) }))
      .sort((a, b) => a.score - b.score)
      .pop()!
      .move;
  }

  private getCurrentPlayerTokens(): Coordinate[] {
    const currentPlayerTokenCoordinates: Coordinate[] = [];
    const size = this.board.getSize();
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const coordinate = new Coordinate(i, j);
        const token = this.board.getToken(new Coordinate(i, j));
        if (token.color === this.currentPlayerColor) {
          currentPlayerTokenCoordinates.push(coordinate);
        }
      }
    }
    return currentPlayerTokenCoordinates;
  }
}
