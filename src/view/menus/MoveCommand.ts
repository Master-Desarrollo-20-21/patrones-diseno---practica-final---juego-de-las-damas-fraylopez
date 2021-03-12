import { PlayController } from "../../controllers/PlayController";
import { BoardView } from "../models/BoardView";
import { GameView } from "../models/GameView";
import { Strings } from "../models/Strings";
import { PlayView } from "../PlayView";
import { CheckersCommand } from "./Command";

export class MoveCommand extends CheckersCommand<PlayController> {
    constructor(playController: PlayController) {
        super(Strings.Move, playController);
    }

    execute() {
        new BoardView(this.acceptorController).render();
        const playerView = new PlayView().getPlayerView(this.acceptorController);
        const move = playerView.getMove(this.acceptorController);
        this.acceptorController.executeMove(move);
        new GameView(this.acceptorController);
    }

    isActive(): boolean {
        return true;
    }
}