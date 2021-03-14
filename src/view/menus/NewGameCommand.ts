import { StartController } from "../../controllers/StartController";
import { ResponseDialog } from "../models/ResponseDialog";
import { Strings } from "../models/Strings";
import { CheckersCommand } from "./Command";

export class NewGameCommand extends CheckersCommand<StartController> {
  constructor(controller: StartController) {
    super(Strings.NewGame, controller);
  }

  execute() {
    this.acceptorController.start();
    const users = new ResponseDialog("How many players?").askNumber();
    this.acceptorController.setNumPlayers(users);
  }

  isActive(): boolean {
    return true;
  }
}
