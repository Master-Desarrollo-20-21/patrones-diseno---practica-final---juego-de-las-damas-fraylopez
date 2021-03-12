import { Color } from "../../models/Color";
import { Token } from "../../models/Token";
import { ConsoleView } from "./ConsoleView";


export class CellView extends ConsoleView {
  constructor(
    private readonly cellColor: Color,
    private readonly token: Token
  ) {
    super();
  }

  render(): void {
    if (this.cellColor === Color.White) {
      if (this.token.color === Color.White) {
        this.console.writeInln("●█");
      } else {
        this.console.writeInln("○█");
      }
    } else {
      if (this.token.color === Color.White) {
        this.console.writeInln("● ");
      } else {
        this.console.writeInln("○ ");
      }
    }
  }
}
