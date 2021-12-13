import { PlayView } from "../src/apps/player/PlayView";
import { PlayController } from "../src/contexts/player/application/PlayController";
import { Color } from "../src/contexts/player/domain/Color";
import { expect } from "chai";
import { Logic } from "../src/contexts/player/application/Logic";
import { Session } from "../src/contexts/player/domain/Session";
import { PlayViewModel } from "../src/contexts/player/application/viewModels/PlayViewModel";
describe('checkers tests', () => {
  let logic: Logic;
  let session: Session;
  let playViewModel: PlayViewModel;
  beforeEach(() => {
    logic = new Logic();
    session = logic.getSession();
    playViewModel = logic.getViewModel<PlayViewModel>(PlayController);

  });
  describe('Play', () => {
    it('should play a View AI game', () => {
      session.setNumPlayers(0);
      const playView = new PlayView(playViewModel);
      while (!session.isGameOver()) {
        playView.interact(playViewModel);
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