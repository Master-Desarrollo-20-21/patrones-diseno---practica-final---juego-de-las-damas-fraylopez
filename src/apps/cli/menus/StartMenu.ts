import { StartController } from "../../../contexts/checkers/application/StartController";
import { Menu } from "../utils/Menu";
import { LoadGameCommand } from "./LoadGameCommand";
import { NewGameCommand } from "./NewGameCommand";

export class StartMenu extends Menu {
  constructor(controller: StartController) {
    super();
    this.addCommand(new NewGameCommand(controller));
    this.addCommand(new LoadGameCommand(controller));
  }
}
