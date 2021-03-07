import { ConsoleView } from "./ConsoleView";


export class EmptyCellView extends ConsoleView {
  render(): void {
    this.console.writeln('██');
  }
}
