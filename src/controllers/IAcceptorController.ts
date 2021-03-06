import { IControllerVisitor } from "./IControllerVisitor";



export interface IAcceptorController {
  accept(controller: IControllerVisitor): void;
}
