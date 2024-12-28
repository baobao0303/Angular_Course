import { NgFor } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  standalone: true,
  templateUrl: "./signals.component.html",
  imports: [NgFor],
})
export class SignalsComponent {
  actions: string[] = [];

  counter = signal(0);

  increment() {
    this.counter.update((oldValue) => oldValue + 1);
    this.actions.push("INCREMENT");
  }
  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    this.actions.push("DECREMENT");
  }
}
