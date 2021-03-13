import { AIPlayer } from "../../models/AIPlayer";
import { PlayerView } from "../PlayerView";

export class AIPlayerView extends PlayerView<AIPlayer> {
  setNextMove() {
    this.player.computeNextMove();
  }
}
