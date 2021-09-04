import { Session } from "../domain/Session";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";
import { ISessionRepository } from "../domain/ISessionRepository";

export class StartController implements IAcceptorController {

  constructor(
    private readonly session: Session,
    private readonly sessionRepository: ISessionRepository,
  ) { }

  setNumPlayers(users: number) {
    this.session.setNumPlayers(users);
  }

  start(name?: string) {
    if (name) {
      this.sessionRepository.load(name);
    } else {
      this.session.goNextstate();
    }
  }

  accept(controller: IControllerVisitor) {
    controller.visitStartController(this);
  }

  getSavedGamesNames(): string[] {
    return this.sessionRepository.getSavedGamesNames();
  }
}
