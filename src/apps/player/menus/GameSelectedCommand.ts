import { StartController } from "../../../contexts/player/application/StartController";
import { CheckersCommand } from "./Command";


export class GameSelectedCommand extends CheckersCommand<StartController> {
  execute(): void {
    this.acceptorController.start(this.title);
  }
  isActive(): boolean {
    return true;
  }
}
