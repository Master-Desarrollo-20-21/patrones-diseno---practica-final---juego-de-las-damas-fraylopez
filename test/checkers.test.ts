import { PlayView } from "../src/apps/cli/PlayView";
import { PlayController } from "../src/contexts/checkers/application/PlayController";
import { Color } from "../src/contexts/checkers/domain/Color";
import { Session } from "./../src/contexts/checkers/domain/Session";
import { expect } from "chai";
describe('checkers tests', () => {
  it('should play a AI game', () => {
    const session = new Session();
    session.setNumPlayers(0);
    const playView = new PlayView();
    const playController = new PlayController(session);
    while (!session.isGameOver()) {
      playView.interact(playController);
    }
    expect(session.isWinner(Color.Black) || session.isWinner(Color.White));
  });
});