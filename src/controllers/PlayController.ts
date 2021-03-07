import { Session } from "../models/Session";
import { Token } from "../models/Token";
import { Coordinate } from "../utils/Coordinate";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";

export class PlayController implements IAcceptorController {
  constructor(private readonly session: Session) { }

  goNextState() {
    throw new Error("Method not implemented.");
  }
  isGameWon(): boolean {
    throw new Error("Method not implemented.");
  }
  getToken(coordinate: Coordinate): Token {
    throw new Error("Method not implemented.");
  }
  isEmpty(coordinate: Coordinate): boolean {
    throw new Error("Method not implemented.");
  }
  getBoardSize(): number {
    throw new Error("Method not implemented.");
  }
  accept(visitor: IControllerVisitor) {
    visitor.visitPlayController(this);
  }
  getCurrentPlayerId(): string {
    throw new Error("Method not implemented.");
  }
}
