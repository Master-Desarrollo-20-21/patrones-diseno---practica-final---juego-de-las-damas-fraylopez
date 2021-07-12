import { Color } from "../Color";
import { PlayerType } from "../player/PlayerType";
import { ISerializedBoard } from "./ISerializedBoard";
import { ISerializedMove } from "./ISerializedMove";
import { ISerializedTurn } from "./ISerializedTurn";

export interface ISerializedGame {
  players: Array<{
    type: PlayerType;
    color: Color;
    nextMove?: ISerializedMove;
  }>;
  turn: ISerializedTurn;
  board: ISerializedBoard;
}

