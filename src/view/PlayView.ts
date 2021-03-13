import { PlayController } from "../controllers/PlayController";
import { GameView } from "./models/GameView";
import { PlayerType } from "../models/PlayerType";
import { PlayerView } from "./PlayerView";
import { HumanPlayerView } from "./local/HumanPlayerView";
import { AIPlayerView } from "./ai/AIPlayerView";
import { AIPlayer } from "../models/AIPlayer";
import { HumanPlayer } from "../models/HumanPlayer";

export class PlayView {
  interact(controller: PlayController) {
    new GameView(controller);
    this.getPlayerView(controller).setNextMove(controller);
    controller.executeMove();
  }

  getPlayerView(controller: PlayController): PlayerView {
    const player = controller.getCurrentPlayer();
    switch (player.type) {
      case PlayerType.Human:
        return new HumanPlayerView(controller, player as HumanPlayer);
      case PlayerType.AI:
        return new AIPlayerView(controller, player as AIPlayer);
    }
  }
}
