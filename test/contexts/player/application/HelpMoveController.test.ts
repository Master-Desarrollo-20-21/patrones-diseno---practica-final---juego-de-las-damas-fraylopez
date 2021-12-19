import { expect } from "chai";
import { HelpMoveController } from "../../../../src/contexts/player/application/HelpMoveController";
import { Session } from "../../../../src/contexts/player/domain/Session";
import { BoardDAO } from "../../../../src/contexts/player/infrastructure/dao/BoardDAO";
import { ISerializedBoard } from "../../../../src/contexts/player/infrastructure/dao/ISerializedBoard";

describe('HelpMoveController', () => {
  let controller: HelpMoveController;
  let session: Session;
  before(() => {
    session = new Session();
    controller = new HelpMoveController(session);
  });
  it('should exist', () => {
    expect(controller).not.to.be.undefined;
  });

  it('should execute a help move', () => {
    session.startNewGame();
    session.setNumPlayers(1);

    const initialBoardState = new BoardDAO(session.getGame().getBoard()).serialize();
    controller.executeHelpMove();
    const newBoardState = new BoardDAO(session.getGame().getBoard()).serialize();
    expect(JSON.stringify(newBoardState)).not.equal(JSON.stringify(initialBoardState));
  });

  it('should choose the better move', () => {
    session.startNewGame();
    session.setNumPlayers(1);
    new BoardDAO(session.getGame().getBoard()).load(getBlackCapturableBoard());
    controller.executeHelpMove();
    const newBoardState = new BoardDAO(session.getGame().getBoard()).serialize();
    expect(JSON.stringify(newBoardState)).equal(JSON.stringify(getBlackCapturedBoard()));
  });
});;

function getBlackCapturableBoard(): ISerializedBoard {
  return {
    rows: [
      ["-", "0", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "1", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
    ]
  };
}

function getBlackCapturedBoard(): ISerializedBoard {
  return {
    rows: [
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "0", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-"],
    ]
  };
}

