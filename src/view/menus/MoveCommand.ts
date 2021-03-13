import { PlayController } from "../../controllers/PlayController";
import { Player } from "../../models/Player";
import { HumanPlayerView } from "../local/HumanPlayerView";
import { Strings } from "../models/Strings";
import { CheckersCommand } from "./Command";

export class MoveCommand extends CheckersCommand<PlayController> {
  constructor(playController: PlayController) {
    super(Strings.Move, playController);
  }

  execute() {
    new HumanPlayerView(this.acceptorController).setNextMove();
  }

  isActive(): boolean {
    return true;
  }
}