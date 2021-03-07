import { StartController } from "../controllers/StartController";
import { ConsoleView } from "./models/ConsoleView";

export class StartView extends ConsoleView {

  interact(controller: StartController): void {
    this.console.writeln("Checkers");
    const users = this.console.readInt("How many players?");
    controller.setNumPlayers(users);
  }
}
