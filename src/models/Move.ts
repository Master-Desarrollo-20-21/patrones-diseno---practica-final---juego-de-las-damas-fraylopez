import { Coordinate } from "../utils/Coordinate";
import { Token } from "./Token";

export class Move {
  constructor(
    private readonly token: Token,
    private readonly from: Coordinate,
    private readonly to: Coordinate,
  ) { }
}