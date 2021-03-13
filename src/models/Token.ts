import { Color } from "./Color";

export class Token {
  constructor(
    public readonly color: Color,
    private _isKing?: boolean
  ) { };

  turnToKing() {
    this._isKing = true;
  }

  get isKing() {
    return !!this._isKing;
  }
}
