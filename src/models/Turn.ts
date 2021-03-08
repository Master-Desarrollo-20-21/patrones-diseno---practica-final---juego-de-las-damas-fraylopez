import { Board } from "./Board";
import { Player } from "./Player";
import { PlayerType } from "./PlayerType";

export class Turn {
  private static NUM_PLAYERS = 2;
  private currentPlayer: number;
  private players: Player[];
  private numPlayers!: number;

  constructor(private readonly board: Board) {
    this.players = [];
    this.currentPlayer = 0;
  }

  goNextTurn() {
    if (this.currentPlayer < this.numPlayers) {
      this.currentPlayer++;
    }
    else {
      this.currentPlayer = 0;
    }
  }

  setNumPlayers(numPlayers: number) {
    this.numPlayers = numPlayers;
    for (let i = 0; i < Turn.NUM_PLAYERS; i++) {
      if (i < this.numPlayers) {
        this.players.push(new Player(PlayerType.Human));
      } else {
        this.players.push(new Player(PlayerType.AI));
      }
    }
  }

  getCurrentPlayerType(): PlayerType {
    return this.players[this.currentPlayer].type;
  }
}

