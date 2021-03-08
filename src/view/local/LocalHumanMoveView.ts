import { Move } from "../../models/Move";
import { PlayerView } from "../PlayerView";

export class LocalPlayerView extends PlayerView {
  getMove(): Move {
    throw new Error("Method not implemented.");
  }
}
