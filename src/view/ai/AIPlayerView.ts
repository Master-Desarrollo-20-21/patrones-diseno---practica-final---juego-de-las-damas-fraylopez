import { PlayerView } from "../models/PlayerView";

export class AIPlayerView extends PlayerView {
  executeNextMove() {
    this.console.writeln(`${this.controller.getCurrentPlayerId()} AI computing next move...`);
    this.controller.executeMove();
  }
}
