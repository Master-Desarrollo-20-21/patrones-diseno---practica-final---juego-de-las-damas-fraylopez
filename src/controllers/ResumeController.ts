import { Session } from "../models/Session";
import { IAcceptorController } from "./IAcceptorController";
import { IControllerVisitor } from "./IControllerVisitor";

export class ResumeController implements IAcceptorController {
  constructor(private readonly session: Session) { }
  accept(controller: IControllerVisitor) {
    throw new Error("Method not implemented.");
  }
}
