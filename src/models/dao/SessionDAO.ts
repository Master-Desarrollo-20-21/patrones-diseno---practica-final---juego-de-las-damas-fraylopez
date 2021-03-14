import { Session } from "../Session";
import fs from "fs";
import { GameDAO } from "./GameDAO";
import { StateValue } from "../StateValue";
import { ISerializedSession } from "./ISerializedSession";

export class SessionDAO {
  private readonly gameDAO: GameDAO;
  constructor(private readonly session: Session) {
    this.gameDAO = new GameDAO(this.session.getGame());
  }
  save(name?: string) {
    if (!name) {
      this.save(this.session.getName());
    } else {
      this.writeToFile(name);
    }
  }

  load(name: string) {
    const data = this.readFromFile(name);
    this.session.setName(name);
    this.gameDAO.load(data.game);
    this.session.resetRegistry();
    this.session.register();
    this.session.goToState(StateValue.InGame);
    if (this.session.isGameOver()) {
      this.session.goToState(StateValue.Resume);
    }
  }

  isValidGameName(name: string): boolean {
    // TODO
    return true;
  }

  private writeToFile(name: string) {
    fs.writeFileSync(name, JSON.stringify(this.serialize()));
  }

  private readFromFile(name: string): ISerializedSession {
    const data = fs.readFileSync(name, "utf-8");
    return JSON.parse(data) as ISerializedSession;
  }

  private serialize(): ISerializedSession {
    return {
      game: this.gameDAO.serialize(),
    };
  }
}