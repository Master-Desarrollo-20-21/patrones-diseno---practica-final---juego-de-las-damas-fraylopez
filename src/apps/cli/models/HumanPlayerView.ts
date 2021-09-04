import { PlayMenu } from "../menus/PlayMenu";
import { PlayerView } from "./PlayerView";

export class HumanPlayerView extends PlayerView {
  executeNextMove() {
    new PlayMenu(this.controller).execute();
  }
}
