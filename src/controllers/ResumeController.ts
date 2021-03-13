import { Session } from "../models/Session";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";

export class ResumeController implements IAcceptorController {
  constructor(private readonly session: Session) { }
  accept(controller: IControllerVisitor) {
    controller.visitResumeController(this);
  }

  resume(newGame: boolean) {
    if (newGame) {
      this.session.startNewGame();
    } else {
      this.session.goNextstate();
    }
  }
}
