import { PlayController } from "../../contexts/player/application/PlayController";
import { GameView } from "./models/GameView";
import { PlayerType } from "../../contexts/player/domain/player/PlayerType";
import { HumanPlayerView } from "./models/HumanPlayerView";
import { PlayerView } from "./models/PlayerView";
import { AIPlayerView } from "./models/AIPlayerView";
import { PlayViewModel } from "../../contexts/player/application/viewModels/PlayViewModel";

export class PlayView {
  private gameView!: GameView;

  constructor(playViewModel: PlayViewModel) {
    this.gameView = new GameView(playViewModel);
    playViewModel.subscribe(this.render.bind(this));
  }

  interact(controller: PlayController) {
    this.getPlayerView(controller).executeNextMove();
  }

  render() {
    this.gameView.render();
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
