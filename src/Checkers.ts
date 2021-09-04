import { IAcceptorController } from "./contexts/checkers/application/IAcceptorController";
import { Logic } from "./contexts/checkers/application/Logic";
import { View } from "./apps/cli/View";

export class Checkers {
  private readonly logic: Logic;
  private readonly view: View;

  constructor() {
    this.logic = new Logic();
    this.view = new View();
  }

  play() {
    let controller: IAcceptorController | null;
    do {
      controller = this.logic.getController();
      if (controller != null) {
        this.view.interact(controller);
      }
    } while (controller != null);
  }
}