import { PlayController } from "../../../contexts/player/application/PlayController";
import { BoardView } from "./BoardView";
import { ResultView } from "./ResultView";

export class GameView {
  private readonly boardView: BoardView;
  constructor(controller: PlayController) {
    this.boardView = new BoardView(controller);
    if (controller.isGameOver()) {
      new ResultView(controller.getCurrentPlayerId()).render();
      controller.goNextState();
    }
  }
  render(): void {
    this.boardView.render();
  }
}
