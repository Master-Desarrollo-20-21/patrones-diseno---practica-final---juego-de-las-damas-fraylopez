import { PlayController } from "../../controllers/PlayController";
import { Move } from "../../models/Move";
import { PlayerView } from "../PlayerView";


export class AIPlayerView extends PlayerView {
  render(): void {
    throw new Error("Method not implemented.");
  }
  getMove(controller: PlayController): Move {
    throw new Error("Method not implemented.");
  }
}
