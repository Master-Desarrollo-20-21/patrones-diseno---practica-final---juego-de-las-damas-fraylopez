import { Coordinate } from "../../_shared/Coordinate";
import { Color } from "../../domain/Color";
import { HumanPlayer } from "../../domain/player/HumanPlayer";
import { Move } from "../../domain/Move";
import { PlayerType } from "../../domain/player/PlayerType";
import { Token } from "../../domain/Token";
import { BoardDAO } from "./BoardDAO";
import { ISerializedGame } from "./ISerializedGame";
import { ISerializedMove } from "./ISerializedMove";
import { TurnDAO } from "./TurnDAO";
import { AIPlayer } from "../../domain/player/AIPlayer";
import { Game } from "../../domain/Game";
import { Player } from "../../domain/player/Player";

export class GameDAO {
  private readonly turnDAO: TurnDAO;
  private readonly boardDAO: BoardDAO;
  constructor(private readonly game: Game) {
    this.turnDAO = new TurnDAO(game.getTurn());
    this.boardDAO = new BoardDAO(game.getBoard());
  }
  serialize(): ISerializedGame {
    return {
      players: this.game.getPlayers().map(p => {
        return {
          type: p.type,
          color: p.color,
          nextMove: this.getNextMove(p)
        };
      }),
      turn: this.turnDAO.serialize(),
      board: this.boardDAO.serialize(),
    };
  }

  load(data: ISerializedGame) {
    const players = data.players.map(d => this.getPlayer(d.color, d.type));
    this.game.setPlayers(players);
    this.turnDAO.load(data.turn);
    this.boardDAO.load(data.board);
  }

  private getPlayer(color: Color, type: PlayerType, _nextMove?: ISerializedMove) {
    const nextMove = _nextMove
      ?
      new Move(
        new Token(color, _nextMove.token.isKing),
        new Coordinate(Number(_nextMove.from.charAt(0)), Number(_nextMove.from.charAt(1))),
        new Coordinate(Number(_nextMove.to.charAt(0)), Number(_nextMove.to.charAt(1))),
      )
      : undefined;

    switch (type) {
      case PlayerType.Human:
        return new HumanPlayer(color, this.game.getBoard(), type, nextMove);
      case PlayerType.AI:
        return new AIPlayer(color, this.game.getBoard(), type, nextMove);
    }
  }

  private getNextMove(player: Player) {
    return undefined;

    // TODO: this fails on game won save game. Review and uncomment
    /*
    const nextMove = player.getNextMove();
     if (nextMove) {
       return {
         token: { isKing: nextMove.token.isKing },
         from: nextMove.from.row.toString() + nextMove.from.column.toString(),
         to: nextMove.to.row.toString() + nextMove.to.column.toString()
       };

      */
  }
}
