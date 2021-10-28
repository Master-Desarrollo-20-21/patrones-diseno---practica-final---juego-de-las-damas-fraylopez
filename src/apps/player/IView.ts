import { IAcceptorController } from "../../contexts/player/application/IAcceptorController";

export interface IView {
  interact(controller: IAcceptorController): void;
}
