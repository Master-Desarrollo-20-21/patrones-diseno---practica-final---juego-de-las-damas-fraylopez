import { Session } from "../../../../src/contexts/player/domain/Session";
import { GameBuilder } from "./GameBuilder";

export class SessionTestHelper extends Session {

  static getSerializedBoard(session: Session) {
    return GameBuilder.getSerializedBoard(session.getGame());
  }

  initializeForOnePlayer() {
    this.startNewGame();
    this.setNumPlayers(1);
    return this;
  }

  withSampleBlackCapturableBoard() {
    GameBuilder.withSampleBlackCapturableBoard(this.getGame());
    return this;
  }

  withSampleBlackSingleAndChainCapurableBoard() {
    GameBuilder.withSampleBlackSingleAndChainCapurableBoard(this.getGame());
  }

  getSerializedBoard(): string {
    return GameBuilder.getSerializedBoard(this.getGame());
  }

}
