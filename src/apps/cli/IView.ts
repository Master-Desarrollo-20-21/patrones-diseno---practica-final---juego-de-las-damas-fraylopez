import { IAcceptorController } from "../../contexts/checkers/application/IAcceptorController";

export interface IView {
  interact(controller: IAcceptorController): void;
}
