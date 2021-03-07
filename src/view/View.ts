import { IAcceptorController } from "../controllers/IAcceptorController";
import { IControllerVisitor } from "../controllers/IControllerVisitor";
import { PlayController } from "../controllers/PlayController";
import { ResumeController } from "../controllers/ResumeController";
import { StartController } from "../controllers/StartController";
import { IView } from "./IView";
import { PlayView } from "./PlayView";
import { ResumeView } from "./ResumeView";
import { StartView } from "./StartView";

export class View implements IView, IControllerVisitor {

  private readonly startView: StartView;
  private readonly playView: PlayView;
  private readonly resumeView: ResumeView;

  constructor() {
    this.startView = new StartView();
    this.playView = new PlayView();
    this.resumeView = new ResumeView();
  }

  public interact(controller: IAcceptorController) {
    controller.accept(this);
  }

  visitStartController(controller: StartController): void {
    this.startView.interact(controller);
  }
  visitPlayController(controller: PlayController): void {
    this.playView.interact(controller);
  }
  visitResumeController(controller: ResumeController): void {
    this.resumeView.interact(controller);
  }
}
