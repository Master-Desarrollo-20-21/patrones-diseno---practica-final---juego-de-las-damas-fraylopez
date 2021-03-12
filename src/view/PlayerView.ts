import { PlayController } from "../controllers/PlayController";
import { Move } from "../models/Move";
import { ConsoleView } from "./models/ConsoleView";


export abstract class PlayerView extends ConsoleView {
  constructor(protected controller: PlayController) {
    super();
  }
  abstract getMove(controller: PlayController): Move;
}
