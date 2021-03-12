import { PlayController } from "../../controllers/PlayController";
import { Move } from "../../models/Move";
import { Coordinate } from "../../utils/Coordinate";
import { PlayMenu } from "../menus/PlayMenu";
import { PlayerView } from "../PlayerView";

export class LocalPlayerView extends PlayerView {
  getMove(controller: PlayController): Move {
    const from = this.console.readString("select token from row,column:");
    const to = this.console.readString("move to row,column:");

    const fromCoordinate = new Coordinate(
      Number(from.split(",")[0]),
      Number(from.split(",")[1])
    );
    const toCoordinate = new Coordinate(
      Number(to.split(",")[0]),
      Number(to.split(",")[1])
    );
    const token = controller.getToken(fromCoordinate);
    return new Move(token, fromCoordinate, toCoordinate);
  }
}
