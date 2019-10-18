import { Component } from "@angular/core";

@Component({
  selector: "TwoWayDataBinding",
  template: `
    <h5>TwoWayDataBinding Exp</h5>
    <br /><u>Old Way </u> <br />
    Name:<input [value]="name" (input)="name = $event.target.value" />
    <br />
    Entered Name:{{ name }}<br />
    <u> New way:two way data binding using ngModel</u> <br />
    <br />
    Name:<input [(ngModel)]="name" />
    <br />
    Entered Name:{{ name }}<br />
  `
})
export class TwoWayDataBinding {
  name: string = "adi";
}
