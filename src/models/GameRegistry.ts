import { Game } from "./Game";
import { Memento } from "./Memento";

export class GameRegistry {
  private mementoList!: Memento[];
  private cursorHead!: number;
  constructor(private readonly game: Game) {
    this.reset();
  }
  register() {
    for (let i = this.cursorHead; i < this.mementoList.length - 1; i++) {
      this.mementoList.pop();
    }
    this.mementoList.push(this.game.createMemento());
    this.cursorHead = this.mementoList.length - 1;
  }
  reset() {
    this.mementoList = [];
    this.cursorHead = 0;
  }
  isRedoable(): boolean {
    return this.cursorHead < this.mementoList.length - 1;
  }
  redo(game: Game) {
    game.set(this.mementoList[this.cursorHead + 1]);
    this.cursorHead++;
  }
  isUndoable(): boolean {
    return this.cursorHead - 1 >= 0;
  }
  undo(game: Game) {
    game.set(this.mementoList[this.cursorHead - 1]);
    this.cursorHead--;
  }
}
