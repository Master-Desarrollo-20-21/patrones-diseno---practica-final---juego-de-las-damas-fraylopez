import { PlayController } from "../../controllers/PlayController";
import { Move } from "../../models/Move";
import { Coordinate } from "../../utils/Coordinate";
import { PlayerView } from "../PlayerView";

export class HumanPlayerView extends PlayerView {
  getMove(controller: PlayController): Move {
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
      const token = controller.getToken(fromCoordinate);
      move = new Move(token, fromCoordinate, toCoordinate);
      isValidMove = controller.isValidMove(move);
      if (!isValidMove) {
        this.console.writeln("Wrong move!");
      }
    } while (!isValidMove);

    return move;
  }
}
