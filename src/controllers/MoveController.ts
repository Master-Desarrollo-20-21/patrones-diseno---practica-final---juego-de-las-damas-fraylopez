import { Color } from "../models/Color";
import { Move } from "../models/Move";
import { Player } from "../models/Player";
import { PlayerType } from "../models/PlayerType";
import { Token } from "../models/Token";
import { Coordinate } from "../utils/Coordinate";
import { SessionController } from "./SessionController";

export class MoveController extends SessionController {
  isValidMove(move: Move) {
    return this.session.isValidMove(move);
  }
  executeMove(move?: Move) {
    this.session.executeMove(move);
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
