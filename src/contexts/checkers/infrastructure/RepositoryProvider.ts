import { ISessionRepository } from "../domain/ISessionRepository";
import { Session } from "../domain/Session";
import { SessionDAO } from "./dao/SessionDAO";

export class ConfigurableDependencies {
  private static _instance: ConfigurableDependencies;

  private sessionRepository!: ISessionRepository;
  constructor() {
  }
  static getInstance(): ConfigurableDependencies {
    if (!this._instance) {
      this._instance = new ConfigurableDependencies();
    }
    return this._instance;
  }

  getSessionRepository(session: Session): ISessionRepository {
    if (!this.sessionRepository) {
      this.sessionRepository = new SessionDAO(session);
    }
    return this.sessionRepository;
  }

}