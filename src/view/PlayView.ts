import { PlayController } from "../controllers/PlayController";
import { GameView } from "./models/GameView";
import { PlayerType } from "../models/PlayerType";
import { HumanPlayerView } from "./models/HumanPlayerView";
import { PlayerView } from "./models/PlayerView";
import { AIPlayerView } from "./ai/AIPlayerView";

export class PlayView {
  interact(controller: PlayController) {
    new GameView(controller);
    const move = this.getPlayerView(controller).getNextMove();
    controller.executeMove(move);
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
