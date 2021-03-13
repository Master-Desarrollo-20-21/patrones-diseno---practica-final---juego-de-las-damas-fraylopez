import { Coordinate } from "../utils/Coordinate";
import { Board } from "./Board";
import { Color } from "./Color";
import { Memento } from "./Memento";
import { Move } from "./Move";
import { Player } from "./Player";
import { PlayerType } from "./PlayerType";
import { Token } from "./Token";
import { Turn } from "./Turn";

export class Game {
  private readonly board: Board;
  private turn!: Turn;
  private readonly players: Player[];

  constructor() {
    this.board = new Board();
    this.players = [];
  }

  setNumPlayers(numPlayers: number) {
    for (let i = 0; i < Turn.NUM_PLAYERS; i++) {
      if (i < numPlayers) {
        this.players.push(new Player(new Token(i), this.board, PlayerType.Human));
      } else {
        this.players.push(new Player(new Token(i), this.board, PlayerType.AI));
      }
    }
    this.turn = new Turn(this.players);
  }

  getCurrentPlayerType(): PlayerType {
    return this.turn.getCurrentPlayerType();
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
  executeMove(move: Move) {
    this.turn.getCurrentPlayer().move(move);
  }
  goNextTurn() {
    this.turn.goNextTurn();
  }

  createMemento(): Memento {
    const board = this.board.copy();
    return new Memento(board, this.turn, this.getPlayersCopy(this.players, board));
  }

  private getPlayersCopy(players: Player[], board: Board): Player[] {
    const playersCopy: Player[] = [];
    for (let i = 0; i < Turn.NUM_PLAYERS; i++) {
      playersCopy.push(new Player(players[i].token, board, players[i].type));
    }
    return playersCopy;
  }
}

