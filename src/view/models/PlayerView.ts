import { PlayController } from "../../controllers/PlayController";
import { Move } from "../../models/Move";
import { ConsoleView } from "./ConsoleView";

export abstract class PlayerView extends ConsoleView {
  constructor(protected controller: PlayController) {
    super();
  }
  abstract executeNextMove(): void;
}
