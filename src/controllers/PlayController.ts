import { Move } from "../models/Move";
import { PlayerType } from "../models/PlayerType";
import { Session } from "../models/Session";
import { Token } from "../models/Token";
import { Coordinate } from "../utils/Coordinate";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";
import { MoveController } from "./MoveController";
import { RedoController } from "./RedoController";
import { UndoController } from "./UndoController";

export class PlayController implements IAcceptorController {

  private readonly moveController: MoveController;
  private readonly undoController: UndoController;
  private readonly redoController: RedoController;
  constructor(session: Session) {
    this.moveController = new MoveController(session);
    this.undoController = new UndoController(session);
    this.redoController = new RedoController(session);
  }
  accept(visitor: IControllerVisitor) {
    visitor.visitPlayController(this);
  }
  goNextState() {
    this.moveController.goNextState();
  }
  isGameWon(): boolean {
    return this.moveController.isGameWon();
  }
  getToken(coordinate: Coordinate): Token {
    return this.moveController.getToken(coordinate);
  }
  isEmpty(coordinate: Coordinate): boolean {
    return this.moveController.isEmpty(coordinate);
  }
  getBoardSize(): number {
    return this.moveController.getBoardSize();
  }
  getCurrentPlayerId(): string {
    return this.moveController.getCurrentPlayerId();
  }
  getCurrentPlayerType(): PlayerType {
    return this.moveController.getCurrentPlayerType();
  }
  executeMove(move: Move) {
    this.moveController.executeMove(move);
  }
  isUndoable(): boolean {
    return this.undoController.isUndoable();
  }
  undo() {
    this.undoController.undo();
  }
  isRedoable(): boolean {
    return this.redoController.isRedoable();
  }
  redo() {
    this.redoController.redo();
  }
}
