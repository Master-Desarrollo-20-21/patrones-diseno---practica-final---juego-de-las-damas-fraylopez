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
    this.console.clear();
    this.console.writeln("");
    this.console.writeln("     columns     ");
    this.console.writeInln("  ");
    for (let i = 0; i < this.controller.getBoardSize(); i++) {
      this.console.writeInln(" " + i.toString());
    }
    this.console.writeln();

    for (let i = 0; i < this.controller.getBoardSize(); i++) {
      this.renderRow(i);
    }
  }

  private renderRow(row: number) {
    for (let j = 0; j < this.controller.getBoardSize(); j++) {
      if (j === 0) {
        this.console.writeInln(row.toString() + " ");
      }
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

