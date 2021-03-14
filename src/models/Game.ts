import { Coordinate } from "../utils/Coordinate";
import { AIPlayer } from "./AIPlayer";
import { HumanPlayer } from "./HumanPlayer";
import { Board } from "./Board";
import { Color } from "./Color";
import { Memento } from "./Memento";
import { Move } from "./Move";
import { Player } from "./Player";
import { PlayerType } from "./PlayerType";
import { Token } from "./Token";
import { Turn } from "./Turn";

export class Game {
  private board!: Board;
  private turn!: Turn;
  private players!: Player[];

  constructor() {
    this.startNewGame();
  }

  startNewGame() {
    this.board = new Board();
    this.players = [];
    this.turn = new Turn(this.players, 0);
  }

  setNumPlayers(numHumanPlayers: number) {
    for (let i = 0; i < Turn.NUM_PLAYERS; i++) {
      if (i < numHumanPlayers) {
        this.players.push(new HumanPlayer(i, this.board, PlayerType.Human));
      } else {
        this.players.push(new AIPlayer(i, this.board, PlayerType.AI));
      }
    }
  }

  getCurrentPlayer(): Player {
    return this.turn.getCurrentPlayer();
  }

  getCurrentPlayerType(): PlayerType {
    return this.turn.getCurrentPlayerType();
  }
  getCurrentPlayerId(): string {
    return this.turn.getCurrentPlayerId();
  }
  getBoardSize(): number {
    return this.board.getSize();
  }
  getBoardColor(coordinate: Coordinate): Color {
    return this.board.getBoardColor(coordinate);
  }
  isEmpty(coordinate: Coordinate): boolean {
    return this.board.isEmpty(coordinate);
  }
  getToken(coordinate: Coordinate): Token {
    return this.board.getToken(coordinate);
  }
  isGameWon(color: Color): boolean {
    return this.board.isGameWon(color);
  }
  isValidMove(move: Move) {
    return this.board.isValidMove(move);
  }
  executeMove(move?: Move) {
    this.turn.getCurrentPlayer().move(move);
  }

  goNextTurn() {
    this.turn.goNextTurn();
  }

  createMemento(): Memento {
    const board = this.board.copy();
    return new Memento(board, this.turn, this.getPlayersCopy(this.players, board));
  }

  set(memento: Memento) {
    this.board = memento.board.copy();
    this.players = this.getPlayersCopy(memento.players, this.board);
    this.turn = memento.turn.copy(this.players);
  }

  getPlayers() {
    return this.players;
  }
  setPlayers(players: Player[]) {
    players.forEach((p, i) => this.players[i] = p);
  }
  getBoard() {
    return this.board;
  }
  getTurn(): Turn {
    return this.turn;
  }
  getLastMove() {
    return this.getCurrentPlayer().getLastMove();
  }
  isCaptureMove(move: Move) {
    return this.board.isCaptureMove(move);
  }

  private getPlayersCopy(players: Player[], board: Board): Player[] {
    const playersCopy: Player[] = [];
    for (let i = 0; i < Turn.NUM_PLAYERS; i++) {
      playersCopy.push(players[i].copy(board));
    }
    return playersCopy;
  }
}

