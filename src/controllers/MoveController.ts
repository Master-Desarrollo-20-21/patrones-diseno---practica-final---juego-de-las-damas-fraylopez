import { Color } from "../models/Color";
import { Move } from "../models/Move";
import { PlayerType } from "../models/PlayerType";
import { Token } from "../models/Token";
import { Coordinate } from "../utils/Coordinate";
import { SessionController } from "./SessionController";

export class MoveController extends SessionController {
  isValidMove(move: Move) {
    return this.session.isValidMove(move);
  }
  executeMove(move: Move) {
    this.session.executeMove(move);
  }
  getCurrentPlayerType(): PlayerType {
    return this.session.getCurrentPlayerType();
  }

  getCurrentPlayerId(): string {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }
}
