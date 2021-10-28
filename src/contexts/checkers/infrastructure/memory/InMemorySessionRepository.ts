import { ISessionRepository } from "../../domain/ISessionRepository";
import { Session } from "../../domain/Session";
import { StateValue } from "../../domain/StateValue";

export class InMemorySessionRepository implements ISessionRepository {
  private static sessions: Map<string, Session> = new Map<string, Session>();
  constructor(private session: Session) {
  }

  save(name?: string): void {
    if (!name) {
      name = `Session_${Date.now()}`;
    }
    InMemorySessionRepository.sessions.set(name, Object.assign({}, this.session));
  }

  load(name: string): void {
    this.session = Object.assign({}, InMemorySessionRepository.sessions.get(name)!);
    this.session = Object.setPrototypeOf(this.session, Session.prototype);
    this.session.goToState(StateValue.InGame);
    if (this.session.isGameOver()) {
      this.session.goToState(StateValue.Resume);
    }
  }

  isValidGameName(name: string): boolean {
    return !InMemorySessionRepository.sessions.get(name);
  }

  getSavedGamesNames(): string[] {
    return Array.from(InMemorySessionRepository.sessions.keys());
  }
}