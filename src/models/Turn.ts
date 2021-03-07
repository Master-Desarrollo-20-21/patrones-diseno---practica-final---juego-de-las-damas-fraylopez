import { Board } from "./Board";
import { Player } from "./Player";

export class Turn {
  private players: Player[];
  private numPlayers!: number;
  constructor(private readonly board: Board) {
    this.players = [];
  }
  setNumPlayers(players: number) {
    this.numPlayers = players;
  }
}

