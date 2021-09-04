import { SessionDAO } from "../infrastructure/dao/SessionDAO";
import { Session } from "../domain/Session";
import { StateValue } from "../domain/StateValue";
import { IAcceptorController } from "./IAcceptorController";
import { PlayController } from "./PlayController";
import { ResumeController } from "./ResumeController";
import { SaveController } from "./SaveController";
import { StartController } from "./StartController";

export class Logic {

  private readonly session: Session;
  private readonly controllers: Map<StateValue, IAcceptorController | null>;
  constructor() {
    this.session = new Session();
    this.controllers = new Map();
    this.controllers.set(StateValue.Initial, new StartController(this.session, new SessionDAO(this.session)));
    this.controllers.set(StateValue.InGame, new PlayController(this.session));
    this.controllers.set(StateValue.Saving, new SaveController(this.session));
    this.controllers.set(StateValue.Resume, new ResumeController(this.session));
    this.controllers.set(StateValue.Exit, null);
  }

  getController(): IAcceptorController | null {
    return this.controllers.get(this.session.getCurrentState())!;
  }
}
