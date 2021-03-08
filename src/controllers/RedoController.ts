import { SessionController } from "./SessionController";

export class RedoController extends SessionController {
  isRedoable() {
    return this.session.isRedoable();
  }
  redo() {
    this.session.redo();
  }
}
