import { PlayController } from "../controllers/PlayController";
import { Player } from "../models/Player";
import { ConsoleView } from "./models/ConsoleView";


export abstract class PlayerView extends ConsoleView {
  constructor(protected controller: PlayController) {
    super();
  }
  abstract setNextMove(): void;
}
