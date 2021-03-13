import { PlayController } from "../controllers/PlayController";
import { GameView } from "./models/GameView";
import { PlayerType } from "../models/PlayerType";
import { PlayerView } from "./PlayerView";
import { HumanPlayerView } from "./local/HumanPlayerView";
import { AIPlayerView } from "./ai/AIPlayerView";
import { AIPlayer } from "../models/AIPlayer";

export class PlayView {
  interact(controller: PlayController) {
    new GameView(controller);
    this.getPlayerView(controller).setNextMove();
    controller.executeMove();
  }

  getPlayerView(controller: PlayController): PlayerView {
    const playerType = controller.getCurrentPlayerType();
    switch (playerType) {
      case PlayerType.Human:
        return new HumanPlayerView(controller);
      case PlayerType.AI:
        return new AIPlayerView(controller);
    }
  }
}
