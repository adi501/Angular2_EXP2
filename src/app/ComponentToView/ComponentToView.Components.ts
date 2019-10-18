import { Component } from "@angular/core";

@Component({
  selector: "ComponentToView",
  template: `
    {{ FName }} <br />
    {{ "Full Name = " + getFullName() }} <br />
    {{ FName ? FName : "No name specified" }}<br />
    <img src="{{ Image }}" />
  `
})
export class ComponentToView {
  FName: string = "Adi";
  LName: string = "JC";
  Image: string = "abc.png";

  getFullName(): string {
    return this.FName + " " + this.LName;
  }
}
