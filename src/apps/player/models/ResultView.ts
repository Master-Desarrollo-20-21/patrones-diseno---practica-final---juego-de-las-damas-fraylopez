import { ConsoleView } from "./ConsoleView";


export class ResultView extends ConsoleView {
  constructor(private readonly winner: string) {
    super();
  }

  render(): void {
    this.console.writeln(`Player ${this.winner} won!`);
  }
}
