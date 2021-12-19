import assert from "assert";
import { Color } from "../domain/Color";
import { Move } from "../domain/Move";
import { Coordinate } from "../_shared/Coordinate";
import { SessionController } from "./SessionController";

export class HelpMoveController extends SessionController {

  executeHelpMove() {
    this.session.executeMove(this.getHelpMove());
  }

  private getHelpMove(): Move {
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
    const token = this.session.getToken(coordinate);
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
      .filter(m => this.session.isValidMove(m));
  }

  private getBestMove(possibleMoves: Move[]): Move {
    assert(possibleMoves.length);
    return possibleMoves
      .map(m => ({ move: m, score: m.getScore(this.session.getGame().getBoard()) }))
      .sort((a, b) => a.score - b.score)
      .pop()!
      .move
      ;
  }

  private getCurrentPlayerTokens(): Coordinate[] {
    const currentPlayerColor = this.session.getCurrentPlayer().color;
    const currentPlayerTokenCoordinates: Coordinate[] = [];
    for (let i = 0; i < this.session.getBoardSize(); i++) {
      for (let j = 0; j < this.session.getBoardSize(); j++) {
        const coordinate = new Coordinate(i, j);
        const token = this.session.getToken(new Coordinate(i, j));
        if (token.color === currentPlayerColor) {
          currentPlayerTokenCoordinates.push(coordinate);
        }
      }
    }
    return currentPlayerTokenCoordinates;
  }
}