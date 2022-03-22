import { Game } from "../../../../src/contexts/player/domain/Game";
import { GameDAO } from "../../../../src/contexts/player/infrastructure/dao/GameDAO";
import { BoardBuilder } from "./BoardBuilder";

export class GameBuilder {

  static withSampleBlackCapturableBoard(game: Game) {
    const gameDao = new GameDAO(game);
    const serialized = gameDao.serialize();
    new GameDAO(game).load({
      ...serialized,
      board: BoardBuilder.withSampleBlackCapturableBoard()
    });
    return game;
  }

  static withSampleBlackSingleAndChainCapurableBoard(game: Game) {
    const gameDao = new GameDAO(game);
    const serialized = gameDao.serialize();
    new GameDAO(game).load({
      ...serialized,
      board: BoardBuilder.withSampleBlackSingleAndChainCapurableBoard()
    });
    return game;
  }
  static getSerializedBoard(game: Game): string {
    return BoardBuilder.getSerializedString(game.getBoard());
  }
}
