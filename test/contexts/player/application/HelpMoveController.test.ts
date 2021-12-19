import { HelpMoveController } from "../../../../src/contexts/player/application/HelpMoveController";
import { Session } from "../../../../src/contexts/player/domain/Session";
import { BoardDAO } from "../../../../src/contexts/player/infrastructure/dao/BoardDAO";
import { expect } from "chai";
import { SessionTestHelper } from "./SessionBuilder";
import { BoardBuilder } from "./BoardBuilder";

describe('HelpMoveController', () => {
  let controller: HelpMoveController;
  let session: SessionTestHelper;

  beforeEach(() => {
    session = new SessionTestHelper();
    controller = new HelpMoveController(session);
  });
  it('should exist', () => {
    expect(controller).not.to.eq(undefined);
  });

  it('should execute a help move', () => {
    session.initializeForOnePlayer();
    const initialBoardState = session.getSerializedBoard();
    controller.executeHelpMove();
    expect(session.getSerializedBoard()).not.equal(initialBoardState);
  });

  it('should choose the better move', () => {
    session
      .initializeForOnePlayer()
      .withSampleBlackCapturableBoard()
      ;
    controller.executeHelpMove();
    const newBoardState = session.getSerializedBoard();
    const capturedBoardState = BoardBuilder.getSerializedString(BoardBuilder.getSampleBlackCapturedBoard());
    expect(newBoardState).eql(capturedBoardState);
  });
});
