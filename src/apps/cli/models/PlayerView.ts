import { PlayController } from "../../../contexts/checkers/application/PlayController";
import { Move } from "../../../contexts/checkers/domain/Move";
import { ConsoleView } from "./ConsoleView";

export abstract class PlayerView extends ConsoleView {
  constructor(protected controller: PlayController) {
    super();
  }
  abstract executeNextMove(): void;
}
