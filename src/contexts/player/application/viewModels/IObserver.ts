import { ISubscription } from "./ISubscription";

export interface IObserver {
  onChange(): void;
  subscribe(subscription: ISubscription): void;
}
