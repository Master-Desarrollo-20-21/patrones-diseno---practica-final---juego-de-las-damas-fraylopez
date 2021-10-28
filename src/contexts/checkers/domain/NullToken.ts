import { Color } from "./Color";
import { Token } from "./Token";

export class NullToken extends Token {
  constructor() {
    super(Color.Null);
  };
}
