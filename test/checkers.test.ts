import { PlayView } from "../src/apps/player/PlayView";
import { PlayController } from "../src/contexts/player/application/PlayController";
import { Color } from "../src/contexts/player/domain/Color";
import { Session } from "../src/contexts/player/domain/Session";
import { expect } from "chai";
describe('checkers tests', () => {
  let session: Session;
  let playController: PlayController;
  beforeEach(() => {
    session = new Session();
    playController = new PlayController(session);

  });
  describe('Play', () => {
    it('should play a View AI game', () => {
      session.setNumPlayers(0);
      const playView = new PlayView();
      while (!session.isGameOver()) {
        playView.interact(playController);
      }
      expect(session.isWinner(Color.Black) || session.isWinner(Color.White));
    });
    it('should play a Controller AI game', () => {
      session.setNumPlayers(0);
      const playController = new PlayController(session);
      while (!session.isGameOver()) {
        playController.executeMove();
      }
      expect(session.isWinner(Color.Black) || session.isWinner(Color.White));
    });
  });

});