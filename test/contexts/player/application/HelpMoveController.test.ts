import { expect } from "chai";
import { HelpMoveController } from "../../../../src/contexts/player/application/HelpMoveController";
import { Session } from "../../../../src/contexts/player/domain/Session";
import { BoardDAO } from "../../../../src/contexts/player/infrastructure/dao/BoardDAO";

describe('HelpMoveController', () => {
  it('should exist', () => {
    const controller = new HelpMoveController(new Session());
    expect(controller).not.to.be.undefined;
  });

  it('should execute a help move', () => {
    const session = new Session();
    session.startNewGame();
    const initialBoardState = new BoardDAO(session.getGame().getBoard()).serialize();
    const controller = new HelpMoveController(session);
    controller.executeHelpMove();
    const newBoardState = new BoardDAO(session.getGame().getBoard()).serialize();
    expect(JSON.stringify(newBoardState)).not.equal(JSON.stringify(initialBoardState));
  });
});;