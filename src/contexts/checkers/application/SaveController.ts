import { Session } from "../domain/Session";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";
import { InMemorySessionRepository } from "../infrastructure/memory/InMemorySessionRepository";
import { ISessionRepository } from "../domain/ISessionRepository";

export class SaveController implements IAcceptorController {
  private readonly repository: ISessionRepository;
  constructor(private readonly session: Session) {
    this.repository = new InMemorySessionRepository(session);
  }

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
