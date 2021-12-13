import { Subscription } from "./Subscription";

export interface IObserver {
  onChange(): void;
  subscribe(subscription: Subscription): void;
}
