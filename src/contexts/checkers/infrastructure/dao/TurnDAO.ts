import { Turn } from "../../domain/Turn";
import { ISerializedTurn } from "./ISerializedTurn";

export class TurnDAO {
  constructor(private readonly turn: Turn) { }
  serialize(): ISerializedTurn {
    return {
      currentPlayer: this.turn.getCurrentPlayerOridinal(),
    };
  }

  load(data: ISerializedTurn) {
    this.turn.setCurrentPlayerOrdinal(data.currentPlayer);
  }
}
