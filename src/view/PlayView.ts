import { PlayController } from "../controllers/PlayController";
import { GameView } from "./models/GameView";
import { PlayerType } from "../models/PlayerType";
import { PlayerView } from "./PlayerView";
import { LocalPlayerView } from "./local/LocalHumanMoveView";
import { AIPlayerView } from "./ai/AIPlayerView";

export class PlayView {
  interact(controller: PlayController) {
    new GameView(controller);
    this.getPlayerView(controller).getMove();
  }

  getPlayerView(controller: PlayController): PlayerView {
    const playerType = controller.getCurrentPlayerType();
    switch (playerType) {
      case PlayerType.Human:
        return new LocalPlayerView(controller);
      case PlayerType.AI:
        return new AIPlayerView(controller);
    }
  }
}
