import { Game } from "./Game";
import { Memento } from "./Memento";

export class GameRegistry {

  private readonly mementoList: Memento[];
  constructor(private readonly game: Game) {
    this.mementoList = [];
  }
  register() {
    this.mementoList.push(this.game.createMemento());
  }
}
