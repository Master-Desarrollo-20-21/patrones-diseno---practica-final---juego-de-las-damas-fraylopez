import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";

export class StartController implements IAcceptorController {
  accept(controller: IControllerVisitor) {
    throw new Error("Method not implemented.");
  }
}
