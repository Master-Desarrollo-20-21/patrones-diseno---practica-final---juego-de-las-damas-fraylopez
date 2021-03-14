import { SessionDAO } from "../models/dao/SessionDAO";
import { Session } from "../models/Session";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";

export class StartController implements IAcceptorController {

  constructor(
    private readonly session: Session,
    private readonly sessionDAO: SessionDAO,
  ) { }

  setNumPlayers(users: number) {
    this.session.setNumPlayers(users);
  }

  start(name?: string) {
    if (name) {
      this.sessionDAO.load(name);
    } else {
      this.session.goNextstate();
    }
  }

  accept(controller: IControllerVisitor) {
    controller.visitStartController(this);
  }

  getSavedGamesNames(): string[] {
    return this.sessionDAO.getSavedGamesNames();
  }
}
