import { PlayController } from "../../../contexts/checkers/application/PlayController";
import { Move } from "../../../contexts/checkers/domain/Move";
import { Coordinate } from "../../../contexts/checkers/_shared/Coordinate";
import { ConsoleView } from "./ConsoleView";

export class MoveInputView extends ConsoleView {
  constructor(private readonly controller: PlayController) {
    super();
  }
  getMove(): Move {
    let move: Move;
    let isValidMove: boolean;
    do {
      const from = this.console.readString("select token from rowcolumn (ie: 21):");
      const to = this.console.readString("move to rowcolumn (ie: 30):");

      const fromCoordinate = new Coordinate(
        Number(from.charAt(0)),
        Number(from.charAt(1))
      );
      const toCoordinate = new Coordinate(
        Number(to.charAt(0)),
        Number(to.charAt(1))
      );
      const token = this.controller.getToken(fromCoordinate);
      move = new Move(token, fromCoordinate, toCoordinate);
      isValidMove = move.isValid && this.controller.isValidMove(move);
      if (!move.isValid) {
        this.console.writeln("Wrong move!");
      }
    } while (!isValidMove);
    return move;
  }
}