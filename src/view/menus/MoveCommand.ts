import { PlayController } from "../../controllers/PlayController";
import { HumanPlayerView } from "../models/HumanPlayerView";
import { Strings } from "../models/Strings";
import { CheckersCommand } from "./Command";

export class MoveCommand extends CheckersCommand<PlayController> {
  constructor(playController: PlayController) {
    super(Strings.Move, playController);
  }

  execute() {
    new HumanPlayerView(this.acceptorController).getNextMove();
  }

  isActive(): boolean {
    return true;
  }
}