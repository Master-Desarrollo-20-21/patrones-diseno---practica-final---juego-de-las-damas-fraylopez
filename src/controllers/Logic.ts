import { GameStates } from "../models/GameStates";
import { IAcceptorController } from "./IAcceptorController";

export class Logic {
  private readonly controllers: Map<GameStates, IAcceptorController>;
  constructor() {
    this.controllers = new Map();
  }
}
