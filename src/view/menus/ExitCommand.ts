import { PlayController } from "../../controllers/PlayController";
import { Strings } from "../models/Strings";
import { CheckersCommand } from "./Command";


export class ExitCommand extends CheckersCommand<PlayController> {
  constructor(playController: PlayController) {
    super(Strings.Exit, playController);
  }

  execute() {
    this.acceptorController.goNextState();
  }

  isActive() {
    return true;
  }
}
