import { Coordinate } from "../utils/Coordinate";
import { Color } from "./Color";
import { Game } from "./Game";
import { GameRegistry } from "./GameRegistry";
import { Move } from "./Move";
import { Player } from "./Player";
import { PlayerType } from "./PlayerType";
import { State } from "./State";
import { StateValue } from "./StateValue";

export class Session {

  private readonly state: State;
  private readonly game: Game;
  private readonly registry: GameRegistry;
  constructor() {
    this.game = new Game();
    this.state = new State();
    this.registry = new GameRegistry(this.game);
  }

  startNewGame() {
    this.game.startNewGame();
    this.state.reset();
    this.registry.reset();
  }

  getCurrentState(): StateValue {
    return this.state.getValue();
  }

  getCurrentPlayer(): Player {
    return this.game.getCurrentPlayer();
  }
  getCurrentPlayerType(): PlayerType {
    return this.game.getCurrentPlayerType();
  }
  getCurrentPlayerId(): string {
    return this.game.getCurrentPlayerId();
  }
  goNextstate() {
    this.state.next();
  }
  setNumPlayers(users: number) {
    this.game.setNumPlayers(users);
  }

  redo() {
    throw new Error("Method not implemented.");
  }
  isRedoable(): boolean {
    throw new Error("Method not implemented.");
  }
  undo() {
    throw new Error("Method not implemented.");
  }
  isUndoable(): boolean {
    throw new Error("Method not implemented.");
  }

  getBoardSize(): number {
    return this.game.getBoardSize();
  }
  getBoardColor(coordinate: Coordinate): Color {
    return this.game.getBoardColor(coordinate);
  }

  isEmpty(coordinate: Coordinate): boolean {
    return this.game.isEmpty(coordinate);
  }
  getToken(coordinate: Coordinate): import("./Token").Token {
    return this.game.getToken(coordinate);
  }
  isWinner(color: Color): boolean {
    return this.game.isGameWon(color);
  }
  isGameOver(): boolean {
    return this.isWinner(Color.Black) || this.isWinner(Color.White);
  }
  isValidMove(move: Move) {
    return this.game.isValidMove(move);
  }

  executeMove(move?: Move) {
    this.game.executeMove(move);
    if (!this.isGameOver()) {
      this.goNextTurn();
      this.registry.register();
    }
  }

  goNextTurn() {
    this.game.goNextTurn();
  }
}