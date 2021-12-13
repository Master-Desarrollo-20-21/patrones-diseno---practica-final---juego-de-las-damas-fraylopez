import { Session } from "../domain/Session";
import { StateValue } from "../domain/StateValue";
import { ConfigurableDependencies } from "../infrastructure/ConfigurableDependencies";
import { IAcceptorController } from "./IAcceptorController";
import { PlayController } from "./PlayController";
import { ResumeController } from "./ResumeController";
import { SaveController } from "./SaveController";
import { StartController } from "./StartController";
import { IObserver } from "./viewModels/IObserver";
import { PlayViewModel } from "./viewModels/PlayViewModel";

export class Logic {

  private readonly session: Session;
  private readonly controllers: Map<StateValue, IAcceptorController | null>;
  private readonly viewModels: IObserver[];
  constructor() {
    this.session = new Session();
    this.controllers = new Map();
    const sessionRepository = ConfigurableDependencies.getInstance().getSessionRepository(this.session);
    this.controllers.set(StateValue.Initial, new StartController(this.session, sessionRepository));
    this.controllers.set(StateValue.InGame, new PlayController(this.session));
    this.controllers.set(StateValue.Saving, new SaveController(this.session, sessionRepository));
    this.controllers.set(StateValue.Resume, new ResumeController(this.session));
    this.controllers.set(StateValue.Exit, null);

    this.viewModels = [new PlayViewModel(this.session)];
  }

  getController(): IAcceptorController | null {
    return this.controllers.get(this.session.getCurrentState())!;
  }
  getViewModel<T>(type: Constructor): T & IAcceptorController {
    return this.viewModels.find(c => c instanceof type)! as any as T & IAcceptorController;
  }
}

type Constructor<T = {}> = new (...args: any[]) => T;