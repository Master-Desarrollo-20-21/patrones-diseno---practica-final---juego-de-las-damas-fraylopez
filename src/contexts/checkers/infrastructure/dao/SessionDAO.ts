import { Session } from "../../domain/Session";
import fs from "fs";
import { GameDAO } from "./GameDAO";
import { StateValue } from "../../domain/StateValue";
import { ISerializedSession } from "./ISerializedSession";
import { ISessionRepository } from "../../domain/ISessionRepository";

export class SessionDAO implements ISessionRepository {

  private static DIR = ".checkers/saved-games/";
  private static EXTENSION = ".json";

  private gameDAO!: GameDAO;
  constructor(private readonly session: Session) {
    fs.mkdirSync(SessionDAO.DIR, { recursive: true });
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
    const data = this.readFromFile(this.getNameWithExtension(name));
    const nameWithoutExtension = this.getNameWithoutExtension(name);
    this.session.setName(nameWithoutExtension);
    this.gameDAO.load(data.game);
    this.session.resetRegistry();
    this.session.register();
    this.session.goToState(StateValue.InGame);
    if (this.session.isGameOver()) {
      this.session.goToState(StateValue.Resume);
    }
  }

  isValidGameName(name: string): boolean {
    return !this.getSavedGamesNames()
      .some(filename => filename === this.getNameWithExtension(name));
  }

  getSavedGamesNames(): string[] {
    return fs.readdirSync(SessionDAO.DIR);
  }

  private writeToFile(name: string) {
    fs.writeFileSync(
      this.getPath(name),
      JSON.stringify(this.serialize()),
    );
  }

  private readFromFile(name: string): ISerializedSession {
    const data = fs.readFileSync(this.getPath(name), "utf-8");
    return JSON.parse(data) as ISerializedSession;
  }

  private serialize(): ISerializedSession {
    return {
      game: this.gameDAO.serialize(),
    };
  }

  private getPath(name: string): string {
    return `${SessionDAO.DIR}${this.getNameWithExtension(name)}`;
  }
  private getNameWithExtension(name: string) {
    return name + (name.indexOf(SessionDAO.EXTENSION) < 0 ? SessionDAO.EXTENSION : "");
  }
  private getNameWithoutExtension(name: string) {
    return name.split(SessionDAO.EXTENSION).join("");
  }
}