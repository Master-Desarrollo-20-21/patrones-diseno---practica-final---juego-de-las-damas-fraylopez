import { Session } from "../domain/Session";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";
import { ISessionRepository } from "../domain/ISessionRepository";

export class SaveController implements IAcceptorController {
  constructor(
    private readonly session: Session,
    private readonly repository: ISessionRepository
  ) { }

  isValidGameName(name: string): boolean {
    return this.repository.isValidGameName(name);
  }
  save(name?: string) {
    this.repository.save(name);
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
