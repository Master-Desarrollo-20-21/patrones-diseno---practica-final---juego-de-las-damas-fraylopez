import { PlayController } from "../controllers/PlayController";
import { Move } from "../models/Move";


export abstract class PlayerView {
  constructor(protected controller: PlayController) { }
  abstract getMove(): Move;
}
