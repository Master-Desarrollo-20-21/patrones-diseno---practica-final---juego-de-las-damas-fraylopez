import { SaveController } from "../../contexts/player/application/SaveController";
import { ConsoleView } from "./models/ConsoleView";

export class SaveView extends ConsoleView {
  interact(controller: SaveController) {
    const saveGameResponse = this.console.readString("Save game? (y/n): ");
    const willSave = saveGameResponse.toLowerCase() === "y";
    if (willSave) {
      if (controller.hasName()) {
        controller.save();
      } else {
        let isValidGameName = false;
        let name: string;
        do {
          name = this.console.readString("Insert game name: ");
          isValidGameName = controller.isValidGameName(name);
          if (!isValidGameName) {
            this.console.writeln("Invalid name, insert a new one: ");
          }
        } while (!isValidGameName);
        controller.save(name);
      }
    }
    controller.goNextstate();
  }
}
