import { Color } from "../domain/Color";
import { Move } from "../domain/Move";
import { Player } from "../domain/player/Player";
import { PlayerType } from "../domain/player/PlayerType";
import { Token } from "../domain/Token";
import { Coordinate } from "../_shared/Coordinate";
import { SessionController } from "./SessionController";

export class MoveController extends SessionController {
  isValidMove(move: Move) {
    return this.session.isValidMove(move);
  }
  executeMove(move?: Move) {
    this.session.executeMove(move);
  }
  isCaptureMove(move: Move) {
    return this.session.isCaptureMove(move);
  }
  getCurrentPlayer(): Player {
    return this.session.getCurrentPlayer();
  }
  getCurrentPlayerType(): PlayerType {
    return this.session.getCurrentPlayerType();
  }

  getCurrentPlayerId(): string {
    return this.session.getCurrentPlayerId();
  }

  getBoardSize(): number {
    return this.session.getBoardSize();
  }
  getBoardColor(coordinate: Coordinate): Color {
    return this.session.getBoardColor(coordinate);
  }
  isEmpty(coordinate: Coordinate): boolean {
    return this.session.isEmpty(coordinate);
  }
  getToken(coordinate: Coordinate): Token {
    return this.session.getToken(coordinate);
  }
  isWinner(color: Color): boolean {
    return this.session.isWinner(color);
  }
  isGameOver(): boolean {
    return this.session.isGameOver();
  }
  goNextState() {
    this.session.goNextstate();
  }
}
