import { PlayController } from "../../controllers/PlayController";
import { GameView } from "../models/GameView";
import { Strings } from "../models/Strings";
import { CheckersCommand } from "./Command";

export class UndoCommand extends CheckersCommand<PlayController> {
  constructor(private readonly playController: PlayController) {
    super(Strings.Redo, playController);
  }

  execute() {
    this.playController.undo();
    new GameView((this.playController));
  }

  isActive(): boolean {
    return (this.playController).isUndoable();
  }
}
