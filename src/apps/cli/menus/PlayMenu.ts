import { PlayController } from "../../../contexts/checkers/application/PlayController";
import { Menu } from "../utils/Menu";
import { ExitCommand } from "./ExitCommand";
import { MoveCommand } from "./MoveCommand";
import { RedoCommand } from "./RedoCommand";
import { UndoCommand } from "./UndoCommand";

export class PlayMenu extends Menu {
  constructor(playController: PlayController) {
    super();
    this.addCommand(new MoveCommand(playController));
    this.addCommand(new UndoCommand(playController));
    this.addCommand(new RedoCommand(playController));
    this.addCommand(new ExitCommand(playController));
  }
}
