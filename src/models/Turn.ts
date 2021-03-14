import { Player } from "./Player";
import { PlayerType } from "./PlayerType";

export class Turn {


  public static NUM_PLAYERS = 2;

  constructor(
    private readonly players: Player[],
    private currentPlayer: number = 0,
  ) { }

  goNextTurn() {
    this.currentPlayer = (this.currentPlayer + 1) % Turn.NUM_PLAYERS;
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
  getCurrentPlayerOridinal() {
    return this.currentPlayer;
  }
  setCurrentPlayerOrdinal(currentPlayer: number) {
    this.currentPlayer = currentPlayer;
  }
  copy(players: Player[]): Turn {
    return new Turn(players, this.currentPlayer);
  }
}

