import { StartController } from "../../../contexts/player/application/StartController";
import { Strings } from "../models/Strings";
import { CheckersCommand } from "./Command";
import { SelectSavedGameMenu } from "./SelectSavedGameMenu";

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
