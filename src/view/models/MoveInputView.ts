import { PlayController } from "../../controllers/PlayController";
import { Move } from "../../models/Move";
import { Coordinate } from "../../utils/Coordinate";
import { ConsoleView } from "./ConsoleView";

export class MoveInputView extends ConsoleView {
  constructor(private readonly controller: PlayController) {
    super();
  }
  getMove(): Move {
    let move: Move;
    let isValidMove: boolean;
    do {
      const from = this.console.readString("select token from row,column:");
      const to = this.console.readString("move to row,column:");

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