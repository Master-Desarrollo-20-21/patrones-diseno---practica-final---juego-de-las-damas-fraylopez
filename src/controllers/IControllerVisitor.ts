import { PlayController } from "./PlayController";
import { ResumeController } from "./ResumeController";
import { StartController } from "./StartController";

export interface IControllerVisitor {
  visitStartController(controller: StartController): void;
  visitPlayController(controller: PlayController): void;
  visitResumeController(controller: ResumeController): void;
}
