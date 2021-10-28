import { Console } from "./Console";

export class View {
  private readonly console: Console;
  constructor() {
    this.console = new Console();
  }
}