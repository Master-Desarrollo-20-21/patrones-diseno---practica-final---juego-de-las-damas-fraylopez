import { SessionController } from "./SessionController";

export class HelpMoveController extends SessionController {

  executeHelpMove() {
    this.session.executeHelpMove();
  }
}