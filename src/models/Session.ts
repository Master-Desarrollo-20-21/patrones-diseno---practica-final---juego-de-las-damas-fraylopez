import { Game } from "./Game";
import { PlayerType } from "./PlayerType";
import { State } from "./State";
import { StateValue } from "./StateValue";

export class Session {


  private readonly state: State;
  private readonly game: Game;
  constructor() {
    this.game = new Game();
    this.state = new State();
  }

  getCurrentState(): StateValue {
    return this.state.getValue();
  }

  getCurrentPlayerType(): PlayerType {
    return this.game.getCurrentPlayerType();
  }

  next() {
    this.state.next();
  }
  setNumPlayers(users: number) {
    this.game.setNumPlayers(users);
  }

  redo() {
    throw new Error("Method not implemented.");
  }
  isRedoable(): boolean {
    throw new Error("Method not implemented.");
  }
  undo() {
    throw new Error("Method not implemented.");
  }
  isUndoable(): boolean {
    throw new Error("Method not implemented.");
  }

}