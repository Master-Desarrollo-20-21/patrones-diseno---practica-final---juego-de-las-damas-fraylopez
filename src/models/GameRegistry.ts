import { Game } from "./Game";
import { Memento } from "./Memento";

export class GameRegistry {
  private mementoList!: Memento[];
  constructor(private readonly game: Game) {
    this.reset();
  }
  register() {
    this.mementoList.push(this.game.createMemento());
  }
  reset() {
    this.mementoList = [];
  }
}
