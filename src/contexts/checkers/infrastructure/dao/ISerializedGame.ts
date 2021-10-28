import { Color } from "../../domain/Color";
import { PlayerType } from "../../domain/player/PlayerType";
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

