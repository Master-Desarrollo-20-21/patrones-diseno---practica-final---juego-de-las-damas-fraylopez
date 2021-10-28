import { Console } from "../utils/Console";


export abstract class ConsoleView {
  protected readonly console: Console;
  constructor() {
    this.console = new Console();
  }
}
