import { PlayController } from "../../../contexts/player/application/PlayController";
import { GameView } from "../models/GameView";
import { Strings } from "../models/Strings";
import { CheckersCommand } from "./Command";

export class RedoCommand extends CheckersCommand<PlayController> {
	constructor(private readonly playController: PlayController) {
		super(Strings.Redo, playController);
	}

	execute() {
		this.playController.redo();
		new GameView((this.playController));
	}

	isActive(): boolean {
		return (this.playController).isRedoable();
	}
}
