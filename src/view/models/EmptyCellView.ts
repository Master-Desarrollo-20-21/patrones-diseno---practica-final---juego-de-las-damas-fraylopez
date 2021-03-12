import { Color } from "../../models/Color";
import { ConsoleView } from "./ConsoleView";


export class EmptyCellView extends ConsoleView {
  constructor(
    private readonly cellColor: Color,
  ) {
    super();
  }
  render(): void {
    if (this.cellColor === Color.White) {
      this.console.writeInln('██');
    } else {
      this.console.writeInln('  ');
    }
  }
}
