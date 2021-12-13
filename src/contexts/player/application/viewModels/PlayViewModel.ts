import { Session } from "../../domain/Session";
import { PlayController } from "../PlayController";
import { IObserver } from "./IObserver";
import { ISubscription } from "./ISubscription";
export class PlayViewModel extends PlayController implements IObserver {
  private readonly subscriptions: ISubscription[];
  constructor(session: Session) {
    super(session);
    this.subscriptions = [];
  }
  onChange(): void {
    this.subscriptions.forEach(s => s.onChange());
  }
  subscribe(subscription: ISubscription): void {
    this.subscriptions.push(subscription);
  }
}