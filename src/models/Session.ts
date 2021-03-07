import { Game } from "./Game";
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

  next() {
    this.state.next();
  }
  setNumPlayers(users: number) {
    this.game.setNumPlayers(users);
  }

}