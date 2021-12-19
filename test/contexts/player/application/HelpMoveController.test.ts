import { expect } from "chai";
import { HelpMoveController } from "../../../../src/contexts/player/application/HelpMoveController";

describe('HelpMoveController', () => {
  it('should exist', () => {
    const controller = new HelpMoveController();
    expect(controller).not.to.be.undefined;
  });
});;