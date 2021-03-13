import { PlayerView } from "../models/PlayerView";

export class AIPlayerView extends PlayerView {
  getNextMove() {
    this.console.writeln("Computing next move...");
    return undefined;
  }
}
