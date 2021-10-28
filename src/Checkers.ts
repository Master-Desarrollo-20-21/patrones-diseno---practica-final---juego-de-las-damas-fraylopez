import { IAcceptorController } from "./contexts/player/application/IAcceptorController";
import { Logic } from "./contexts/player/application/Logic";
import { View } from "./apps/player/View";

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