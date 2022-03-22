import assert from "assert";
import { Coordinate } from "../_shared/Coordinate";
import { Board } from "./Board";
import { Color } from "./Color";
import { Move } from "./Move";

interface ITree {
  move: Move;
  board: Board;
  children: ITree[];
}

export class BoardHelper {
  private currentPlayerColor!: Color;
  private readonly board: Board;

  constructor(board: Board) {
    this.board = board.copy();
  }

  getHelpMove(currentPlayerColor: Color): Move {
    this.currentPlayerColor = currentPlayerColor;
    const trees = this.getTreesForBoard(this.board);
    const bestTree: ITree = this.getBestTree(trees);
    return bestTree.move;
  }

  private getTreesForBoard(board: Board): ITree[] {
    const currentPlayerTokensCoordinates: Coordinate[] = this.getCurrentPlayerTokens(board);
    const trees: ITree[] = [];
    for (const coordinate of currentPlayerTokensCoordinates) {
      const coordinateTrees: ITree[] = this.getCoordinateTrees(coordinate, board);
      if (coordinateTrees.length) {
        trees.push(...coordinateTrees);
      }
    }
    return trees;
  }

  private getCoordinateTrees(coordinate: Coordinate, board: Board): ITree[] {
    return this.getTokenMoves(coordinate, board)
      .map(move => {
        if (board.isCaptureMove(move)) {
          const newBoard = board.copy();
          newBoard.move(move);
          return {
            move,
            board: newBoard,
            children: this.getCoordinateTrees(move.to, newBoard)
          };
        }
        return null;
      })
      .filter(d => !!d) as ITree[]
      ;

  }
  private getMoveTrees(move: Move, board: Board): ITree[] {
    if (board.isCaptureMove(move)) {
      const newBoard = board.copy();
      newBoard.move(move);
      return this.getTokenMoves(move.to, newBoard)
        .map(newMove => ({
          move: newMove,
          board: newBoard,
          children: this.getMoveTrees(newMove, newBoard),
        }));
    }
    return [];
  }

  private getBestTree(trees: ITree[]): ITree {
    return trees
      .map(tree => ({
        tree,
        score: this.getTreeScore(tree)
      }))
      .sort((a, b) => b.score - a.score)
    [0].tree;
  }

  private getTreeScore(tree: ITree, score: number = 0): number {
    if (tree.children.length) {
      const bestChild = tree.children
        .sort((a, b) => b.move.getScore(b.board) - a.move.getScore(a.board))
      [0];

      return this.getTreeScore(bestChild, score + bestChild.move.getScore(bestChild.board));
    }
    score += tree.move.getScore(tree.board);
    return score;
  }


  private getTokenMoves(coordinate: Coordinate, board: Board): Move[] {
    const moves: Move[] = [];
    const token = board.getToken(coordinate);
    const basicVerticalMoveLength = token.color === Color.White ? 1 : -1;
    moves.push(new Move(
      token,
      coordinate,
      new Coordinate(coordinate.row + basicVerticalMoveLength, coordinate.column + 1)
    ));
    moves.push(new Move(
      token,
      coordinate,
      new Coordinate(coordinate.row + basicVerticalMoveLength, coordinate.column - 1)
    ));
    moves.push(new Move(
      token,
      coordinate,
      new Coordinate(coordinate.row + 2 * basicVerticalMoveLength, coordinate.column + 2)
    ));
    moves.push(new Move(
      token,
      coordinate,
      new Coordinate(coordinate.row + 2 * basicVerticalMoveLength, coordinate.column - 2)
    ));
    return moves
      .filter(m => board.isValidMove(m));
  }

  private getCurrentPlayerTokens(board: Board): Coordinate[] {
    const currentPlayerTokenCoordinates: Coordinate[] = [];
    const size = board.getSize();
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const coordinate = new Coordinate(i, j);
        const token = board.getToken(new Coordinate(i, j));
        if (token.color === this.currentPlayerColor) {
          currentPlayerTokenCoordinates.push(coordinate);
        }
      }
    }
    return currentPlayerTokenCoordinates;
  }
}
