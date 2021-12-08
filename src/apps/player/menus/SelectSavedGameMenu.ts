import { StartController } from "../../../contexts/player/application/StartController";
import { Menu } from "../utils/Menu";
import { GameSelectedCommand } from "./GameSelectedCommand";

export class SelectSavedGameMenu extends Menu {
  constructor(savedGames: string[], controller: StartController) {
    super();
    savedGames.forEach(game => this.addCommand(new GameSelectedCommand(game, controller)));
  };
}
