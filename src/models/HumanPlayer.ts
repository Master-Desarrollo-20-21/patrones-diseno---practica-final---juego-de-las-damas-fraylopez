import assert from "assert";
import { Board } from "./Board";
import { Move } from "./Move";
import { Player } from "./Player";
import { PlayerType } from "./PlayerType";
import { Token } from "./Token";


export class HumanPlayer extends Player {

  constructor(
    token: Token,
    board: Board,
    type: PlayerType,
    nextMove?: Move
  ) {
    super(token, board, type, nextMove);
  }

  setNextMove(move: Move) {
    this.nextMove = move;
  }

  getNextMove(): Move {
    assert(this.nextMove);
    return this.nextMove;
  }

  copy(board: Board) {
    return new HumanPlayer(this.token, board, this.type, this.nextMove);
  }
}
