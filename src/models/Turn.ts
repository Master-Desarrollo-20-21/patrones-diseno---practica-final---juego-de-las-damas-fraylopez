import { Player } from "./Player";
import { PlayerType } from "./PlayerType";

export class Turn {

  public static NUM_PLAYERS = 2;

  constructor(
    private readonly players: Player[],
    private numHumanPlayers: number,
    private currentPlayer: number = 0,

  ) { }

  goNextTurn() {
    if (this.currentPlayer < this.numHumanPlayers) {
      this.currentPlayer++;
    }
    else {
      this.currentPlayer = 0;
    }
  }

  getCurrentPlayerType(): PlayerType {
    return this.getCurrentPlayer().type;
  }
  getCurrentPlayerId(): string {
    return this.getCurrentPlayer().getId();
  }
  getCurrentPlayer() {
    return this.players[this.currentPlayer];
  }


  copy(players: Player[]): Turn {
    return new Turn(players, this.currentPlayer);
  }
}

