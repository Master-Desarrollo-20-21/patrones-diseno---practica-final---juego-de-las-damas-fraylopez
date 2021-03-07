import { IAcceptorController } from "../controllers/IAcceptorController";

export interface IView {
  interact(controller: IAcceptorController): void;
}
