import { PlayController } from "../../../contexts/player/application/PlayController";
import { BoardView } from "./BoardView";
import { ResultView } from "./ResultView";

export class GameView {
  constructor(controller: PlayController) {
    new BoardView(controller).render();
    if (controller.isGameOver()) {
      new ResultView(controller.getCurrentPlayerId()).render();
      controller.goNextState();
    }
  }
}
