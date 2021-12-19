import { Color } from "../domain/Color";
import { Move } from "../domain/Move";
import { Token } from "../domain/Token";
import { Coordinate } from "../_shared/Coordinate";
import { SessionController } from "./SessionController";

export class HelpMoveController extends SessionController {
  executeHelpMove() {
    this.session.setNumPlayers(1);
    this.session.executeMove(
      new Move(
        new Token(Color.Black),
        new Coordinate(2, 1),
        new Coordinate(3, 0))
    );
  }

}