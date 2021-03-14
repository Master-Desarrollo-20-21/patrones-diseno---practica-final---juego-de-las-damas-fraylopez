import { Session } from "../models/Session";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";
import { SessionDAO } from "../models/dao/SessionDAO";

export class SaveController implements IAcceptorController {
  private readonly sessionDAO: SessionDAO;
  constructor(private readonly session: Session) {
    this.sessionDAO = new SessionDAO(session);
  }

  isValidGameName(name: string): boolean {
    return this.sessionDAO.isValidGameName(name);
  }
  save(name?: string) {
    this.sessionDAO.save(name);
  }
  hasName(): boolean {
    return this.session.hasName();
  }
  accept(controller: IControllerVisitor): void {
    controller.visitSaveController(this);
  }
  goNextstate() {
    this.session.goNextstate();
  }
}
