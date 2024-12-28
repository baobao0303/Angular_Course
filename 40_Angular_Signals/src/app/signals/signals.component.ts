import { NgFor } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  standalone: true,
  templateUrl: "./signals.component.html",
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);

  counter = signal(0);

  increment() {
    // this.counter.update((oldValue) => oldValue + 1);
    // this.actions.push("INCREMENT");
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => oldActions.push("INCREMENT"));
  }
  decrement() {
    this.counter.set(this.counter() - 1);
    this.actions.mutate((oldActions) => oldActions.push("DECREMENT"));
  }
}
