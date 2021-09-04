import { PlayController } from "../../../contexts/checkers/application/PlayController";
import { Strings } from "../models/Strings";
import { CheckersCommand } from "./Command";


export class SaveCommand extends CheckersCommand<PlayController> {
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
