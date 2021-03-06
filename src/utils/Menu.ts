import { ClosedInterval } from "./ClosedInterval";
import { Command } from "./Command";
import { Console } from "./Console";

export abstract class Menu {

  private static OPTION = "Option? [1-#size]: ";
  private commandList: Command[];

  constructor() {
    this.commandList = [];
  }

  public async execute(): Promise<void> {
    const commands: Command[] = [];
    for (let i = 0; i < this.commandList.length; i++) {
      if (this.commandList[i].isActive()) {
        commands.push(this.commandList[i]);
      }
    }
    let option: number;
    const console = new Console();
    let error: boolean;
    do {
      error = false;
      console.writeln();
      for (let i = 0; i < commands.length; i++) {
        console.writeln((i + 1) + ") " + commands[i].getTitle());
      }
      option = await console.readInt(Menu.OPTION.replace("#size", "" + commands.length)) - 1;
      if (!new ClosedInterval(0, commands.length - 1).includes(option)) {
        error = true;
      }
    } while (error);
    await commands[option].execute();
  }

  protected addCommand(command: Command): void {
    this.commandList.push(command);
  }

}
