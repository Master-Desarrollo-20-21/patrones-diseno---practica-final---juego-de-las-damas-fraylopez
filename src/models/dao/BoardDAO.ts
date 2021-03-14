import { Board } from "../Board";
import { Color } from "../Color";
import { Token } from "../Token";
import { ISerializedBoard } from "./ISerializedBoard";

export class BoardDAO {
  constructor(private readonly board: Board) { }

  serialize(): ISerializedBoard {
    const coordinates = this.board.getCoordinates();
    const rows: Array<"0" | "1" | "00" | "11" | "-"> = [];
    for (let i = 0; i < coordinates.length; i++) {
      const row = [];
      for (let j = 0; j < coordinates[i].length; j++) {
        const token = coordinates[i][j];
        const encodedCoordinate = token ?
          token.color.toString() + (token.isKing ? token.color : "")
          :
          "-";
        row.push(encodedCoordinate);
      }
    }
    return {
      rows
    };
  }

  load(data: ISerializedBoard) {
    const coordinates: Array<Array<Token | undefined>> = [];
    for (let i = 0; i < data.rows.length; i++) {
      const readRow = data.rows[i];
      coordinates[i] = [];
      for (let j = 0; j < readRow.length; j++) {
        const encodedToken = readRow[j];
        const token = this.decodeToken(encodedToken as any);
        coordinates[i].push(token);
      }
    }
    this.board.setCoordinates(coordinates);
  }

  private decodeToken(encodedToken: "0" | "1" | "00" | "11" | "-") {
    switch (encodedToken) {
      case "0":
        return new Token(Color.White);
      case "1":
        return new Token(Color.Black);
      case "00":
        return new Token(Color.White, true);
      case "11":
        return new Token(Color.Black, true);
      case "-":
        return undefined;
    }
  }
}
