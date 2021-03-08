import { Move } from "../models/Move";
import { PlayerType } from "../models/PlayerType";
import { Token } from "../models/Token";
import { Coordinate } from "../utils/Coordinate";
import { SessionController } from "./SessionController";

export class MoveController extends SessionController {
  executeMove(move: Move) {
    throw new Error("Method not implemented.");
  }
  getCurrentPlayerType(): PlayerType {
    return this.session.getCurrentPlayerType();
  }

  getCurrentPlayerId(): string {
    throw new Error("Method not implemented.");
  }
  getBoardSize(): number {
    throw new Error("Method not implemented.");
  }
  isEmpty(coordinate: Coordinate): boolean {
    throw new Error("Method not implemented.");
  }
  getToken(coordinate: Coordinate): Token {
    throw new Error("Method not implemented.");
  }
  isGameWon(): boolean {
    throw new Error("Method not implemented.");
  }
  goNextState() {
    throw new Error("Method not implemented.");
  }
}
