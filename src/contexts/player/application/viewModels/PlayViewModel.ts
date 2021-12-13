import { Session } from "../../domain/Session";
import { PlayController } from "../PlayController";
import { IObserver } from "./IObserver";
import { Subscription } from "./Subscription";
export class PlayViewModel extends PlayController implements IObserver {
  private readonly subscriptions: Subscription[];
  constructor(session: Session) {
    super(session);
    this.subscriptions = [];
  }
  onChange(): void {
    this.subscriptions.forEach(s => s());
  }
  subscribe(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }
}