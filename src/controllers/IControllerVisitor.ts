import { PlayController } from "./PlayController";
import { ResumeController } from "./ResumeController";
import { SaveController } from "./SaveController";
import { StartController } from "./StartController";

export interface IControllerVisitor {
  visitStartController(controller: StartController): void;
  visitPlayController(controller: PlayController): void;
  visitResumeController(controller: ResumeController): void;
  visitSaveController(controller: SaveController): void;
}
