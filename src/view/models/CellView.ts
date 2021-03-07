import { Color } from "../../models/Color";
import { Token } from "../../models/Token";
import { ConsoleView } from "./ConsoleView";


export class CellView extends ConsoleView {
  constructor(private readonly token: Token) {
    super();
  }

  render(): void {
    if (this.token.color === Color.White) {
      this.console.writeln("● ");
    } else {
      this.console.writeln("○ ");
    }
  }
}
