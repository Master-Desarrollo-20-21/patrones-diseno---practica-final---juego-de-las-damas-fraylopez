import { IAcceptorController } from "../../contexts/checkers/application/IAcceptorController";
import { IControllerVisitor } from "../../contexts/checkers/application/IControllerVisitor";
import { PlayController } from "../../contexts/checkers/application/PlayController";
import { ResumeController } from "../../contexts/checkers/application/ResumeController";
import { SaveController } from "../../contexts/checkers/application/SaveController";
import { StartController } from "../../contexts/checkers/application/StartController";
import { IView } from "./IView";
import { PlayView } from "./PlayView";
import { ResumeView } from "./ResumeView";
import { SaveView } from "./SaveView";
import { StartView } from "./StartView";

export class View implements IView, IControllerVisitor {

  private readonly startView: StartView;
  private readonly playView: PlayView;
  private readonly resumeView: ResumeView;
  private readonly saveView: SaveView;

  constructor() {
    this.startView = new StartView();
    this.playView = new PlayView();
    this.resumeView = new ResumeView();
    this.saveView = new SaveView();
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
  visitSaveController(controller: SaveController): void {
    this.saveView.interact(controller);
  }
}
