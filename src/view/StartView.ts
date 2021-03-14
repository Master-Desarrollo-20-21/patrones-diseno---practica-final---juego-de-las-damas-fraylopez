import { StartController } from "../controllers/StartController";
import { StartMenu } from "./menus/StartMenu";
import { ConsoleView } from "./models/ConsoleView";

export class StartView extends ConsoleView {

  interact(controller: StartController): void {
    this.console.writeln("Checkers");
    new StartMenu(controller).execute();
  }
}
