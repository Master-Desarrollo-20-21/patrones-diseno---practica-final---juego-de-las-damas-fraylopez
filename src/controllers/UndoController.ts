import { SessionController } from "./SessionController";

export class UndoController extends SessionController {
  isUndoable(): boolean {
    return this.session.isUndoable();
  }
  undo() {
    this.session.undo();
  }
}
