import { PlayController } from "../../contexts/player/application/PlayController";
import { GameView } from "./models/GameView";
import { PlayerType } from "../../contexts/player/domain/player/PlayerType";
import { HumanPlayerView } from "./models/HumanPlayerView";
import { PlayerView } from "./models/PlayerView";
import { AIPlayerView } from "./models/AIPlayerView";

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
