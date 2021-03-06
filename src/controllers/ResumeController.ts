import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";

export class ResumeController implements IAcceptorController {
  accept(controller: IControllerVisitor) {
    throw new Error("Method not implemented.");
  }
}
