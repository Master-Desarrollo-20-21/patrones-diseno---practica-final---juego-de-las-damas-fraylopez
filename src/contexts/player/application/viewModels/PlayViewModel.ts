import { Move } from "../../domain/Move";
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

  executeMove(move?: Move): void {
    super.executeMove(move);
    this.onChange();
  }

  undo(): void {
    super.undo();
    this.onChange();
  }

  redo(): void {
    super.redo();
    this.onChange();
  }

  onChange(): void {
    this.subscriptions.forEach(s => s());
  }
  subscribe(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }
}