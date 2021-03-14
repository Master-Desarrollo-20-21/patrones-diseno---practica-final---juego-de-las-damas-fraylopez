import { PlayController } from "../controllers/PlayController";
import { GameView } from "./models/GameView";
import { PlayerType } from "../models/PlayerType";
import { HumanPlayerView } from "./models/HumanPlayerView";
import { PlayerView } from "./models/PlayerView";
import { AIPlayerView } from "./ai/AIPlayerView";

export class PlayView {
  interact(controller: PlayController) {
    new GameView(controller);
    this.getPlayerView(controller).executeNextMove();
  }

  getPlayerView(controller: PlayController): PlayerView {
    // TODO: possible extension point. Not extensible in current scope
    const playerType = controller.getCurrentPlayerType();
    switch (playerType) {
      case PlayerType.Human:
        return new HumanPlayerView(controller);
      case PlayerType.AI:
        return new AIPlayerView(controller);
    }
  }
}
