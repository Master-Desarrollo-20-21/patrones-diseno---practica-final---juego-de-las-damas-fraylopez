import { Color } from "../../../contexts/checkers/domain/Color";
import { Token } from "../../../contexts/checkers/domain/Token";
import { ConsoleView } from "./ConsoleView";


export class CellView extends ConsoleView {
  constructor(
    private readonly cellColor: Color,
    private readonly token: Token
  ) {
    super();
  }

  render(): void {
    // TODO: refactor
    if (this.cellColor === Color.White) {
      if (this.token.color === Color.White) {
        if (this.token.isKing) {
          this.console.writeInln("◉█");
        } else {
          this.console.writeInln("●█");
        }
      } else {
        if (this.token.isKing) {
          this.console.writeInln("◎█");
        } else {
          this.console.writeInln("○█");
        }
      }
    } else {
      if (this.token.color === Color.White) {
        if (this.token.isKing) {
          this.console.writeInln("◉ ");
        } else {
          this.console.writeInln("● ");
        }
      } else {
        if (this.token.isKing) {
          this.console.writeInln("◎ ");
        } else {
          this.console.writeInln("○ ");
        }
      }
    }
  }
}
