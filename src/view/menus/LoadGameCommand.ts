import { StartController } from "../../controllers/StartController";
import { Menu } from "../../utils/Menu";
import { Strings } from "../models/Strings";
import { CheckersCommand } from "./Command";

export class LoadGameCommand extends CheckersCommand<StartController> {
  constructor(controller: StartController) {
    super(Strings.LoadGame, controller);
  }

  execute() {
    new SelectSavedGameMenu(this.acceptorController.getSavedGamesNames(), this.acceptorController).execute();
    // const users = new ResponseDialog("How many players?").askNumber();
    // this.acceptorController.setNumPlayers(users);
  }

  isActive(): boolean {
    return this.acceptorController.getSavedGamesNames().length > 0;
  }
}

class SelectSavedGameMenu extends Menu {
  constructor(savedGames: string[], controller: StartController) {
    super();
    savedGames.forEach(game => this.addCommand(new GameSelectedCommand(game, controller)));
  };
}

class GameSelectedCommand extends CheckersCommand<StartController>{
  execute(): void {
    this.acceptorController.start(this.title);
  }
  isActive(): boolean {
    return true;
  }
}