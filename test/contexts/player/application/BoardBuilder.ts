import { Board } from "../../../../src/contexts/player/domain/Board";
import { BoardDAO } from "../../../../src/contexts/player/infrastructure/dao/BoardDAO";
import { ISerializedBoard } from "../../../../src/contexts/player/infrastructure/dao/ISerializedBoard";

export class BoardBuilder {
  static getSampleBlackChainCapturedBoard(): ISerializedBoard {
    throw new Error("Method not implemented.");
  }
  static getSerializedObject(board: Board) {
    return new BoardDAO(board).serialize();
  }

  static getSerializedString(board: ISerializedBoard): string;
  static getSerializedString(board: Board): string;
  static getSerializedString(board: Board | ISerializedBoard) {
    return this.toString(board instanceof Board ? this.getSerializedObject(board) : board);
  }

  static toString(board: any) {
    return JSON.stringify(board);
  }


  static withSampleBlackCapturableBoard(): ISerializedBoard {
    return {
      rows: [
        ["-", "0", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "1", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
      ]
    };
  }
  static getSampleBlackCapturedBoard(): ISerializedBoard {
    return {
      rows: [
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "0", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"],
      ]
    };
  }
}
