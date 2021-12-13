import { IAcceptorController } from "../../contexts/player/application/IAcceptorController";
import { IControllerVisitor } from "../../contexts/player/application/IControllerVisitor";
import { Logic } from "../../contexts/player/application/Logic";
import { PlayController } from "../../contexts/player/application/PlayController";
import { ResumeController } from "../../contexts/player/application/ResumeController";
import { SaveController } from "../../contexts/player/application/SaveController";
import { StartController } from "../../contexts/player/application/StartController";
import { PlayViewModel } from "../../contexts/player/application/viewModels/PlayViewModel";
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

  constructor(logic: Logic) {
    this.startView = new StartView();
    this.playView = new PlayView(logic.getViewModel<PlayViewModel>(PlayViewModel));
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
