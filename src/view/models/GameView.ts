import { PlayController } from "../../controllers/PlayController";
import { BoardView } from "./BoardView";
import { ResultView } from "./ResultView";

export class GameView {
  constructor(controller: PlayController) {
    new BoardView(controller).render();
    if (controller.isGameWon()) {
      new ResultView(controller.getCurrentPlayerId()).render();
      controller.goNextState();
    }
  }
}
