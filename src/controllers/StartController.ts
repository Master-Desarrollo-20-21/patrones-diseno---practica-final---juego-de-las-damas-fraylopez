import { Session } from "../models/Session";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";

export class StartController implements IAcceptorController {

  constructor(private readonly session: Session) { }
  setNumPlayers(users: number) {
    this.session.setNumPlayers(users);
    this.session.next();
  }
  accept(controller: IControllerVisitor) {
    controller.visitStartController(this);
  }
}
