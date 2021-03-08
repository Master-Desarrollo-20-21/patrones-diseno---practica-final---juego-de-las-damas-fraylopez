import { Move } from "../../models/Move";
import { PlayerView } from "../PlayerView";


export class AIPlayerView extends PlayerView {
  render(): void {
    throw new Error("Method not implemented.");
  }
  getMove(): Move {
    //TODO: random?
    throw new Error("Method not implemented.");
  }
}
