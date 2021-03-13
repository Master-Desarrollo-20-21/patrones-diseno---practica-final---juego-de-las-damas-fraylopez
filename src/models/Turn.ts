import { Board } from "./Board";
import { Player } from "./Player";
import { PlayerType } from "./PlayerType";

export class Turn {

  public static NUM_PLAYERS = 2;
  private currentPlayer: number;
  private numPlayers!: number;

  constructor(private readonly players: Player[], currentPlayer?: number) {
    this.currentPlayer = currentPlayer || 0;
  }

  goNextTurn() {
    if (this.currentPlayer < this.numPlayers) {
      this.currentPlayer++;
    }
    else {
      this.currentPlayer = 0;
    }
  }

  getCurrentPlayerType(): PlayerType {
    return this.getCurrentPlayer().type;
  }
  getCurrentPlayer() {
    return this.players[this.currentPlayer];
  }

  copy(players: Player[]): Turn {
    return new Turn(players, this.currentPlayer);
  }
}

