import { StateValue } from "./StateValue";

export class State {
  private static states = [
    StateValue.Initial,
    StateValue.InGame,
    StateValue.Saving,
    StateValue.Resume,
    StateValue.Exit,
  ];
  private value!: StateValue;
  constructor() {
    this.reset();
  }
  next() {
    this.value = State.states[State.states.indexOf(this.value) + 1];
  }
  reset() {
    this.value = State.states[0];
  }
  getValue() {
    return this.value;
  }
  setValue(state: StateValue) {
    this.value = state;
  }
}
