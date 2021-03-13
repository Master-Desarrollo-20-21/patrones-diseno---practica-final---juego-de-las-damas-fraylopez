import { PlayController } from "../controllers/PlayController";
import { Player } from "../models/Player";
import { ConsoleView } from "./models/ConsoleView";


export abstract class PlayerView<TPlayer extends Player = Player> extends ConsoleView {
  constructor(protected controller: PlayController, protected player: TPlayer) {
    super();
  }
  abstract setNextMove(controller: PlayController): void;
}
