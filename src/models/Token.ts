import { Color } from "./Color";

export class Token {
  constructor(
    public readonly color: Color,
    private _isKing?: boolean
  ) {
    this._isKing = !!_isKing;
  };

  turnToKing() {
    this._isKing = true;
  }

  get isKing() {
    return !!this._isKing;
  }

  get isNull() {
    return this.color === Color.Null;
  }
}
