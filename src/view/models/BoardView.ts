import { PlayController } from "../../controllers/PlayController";
import { Coordinate } from "../../utils/Coordinate";
import { CellView } from "./CellView";
import { ConsoleView } from "./ConsoleView";
import { EmptyCellView } from "./EmptyCellView";

export class BoardView extends ConsoleView {

  constructor(private readonly controller: PlayController) {
    super();
  }

  render(): void {
    for (let i = 0; i < this.controller.getBoardSize(); i++) {
      this.renderRow(i);
    }
  }

  private renderRow(row: number) {
    for (let j = 0; j < this.controller.getBoardSize(); j++) {
      this.renderCell(new Coordinate(row, j));
    }
    this.console.writeln();
  }

  private renderCell(coordinate: Coordinate) {
    const boardColor = this.controller.getBoardColor(coordinate);
    if (this.controller.isEmpty(coordinate)) {
      new EmptyCellView(boardColor).render();
    }
    else {
      new CellView(boardColor, this.controller.getToken(coordinate)).render();
    }
  }
}

