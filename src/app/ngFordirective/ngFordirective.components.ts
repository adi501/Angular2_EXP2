import { Component } from "@angular/core";

@Component({
  selector: "ngFordirective",
  templateUrl: "./ngFordirective.components.html",
  styleUrls: ["./ngFordirective.components.css"]
})
export class ngFordirective {
  employees: any[] = [
    { Id: 1, Name: "Emp1", Sal: 1000 },
    { Id: 2, Name: "Emp2", Sal: 2000 },
    { Id: 3, Name: "Emp3", Sal: 3000 },
    { Id: 4, Name: "Emp4", Sal: 5000 },
    { Id: 5, Name: "Emp5", Sal: 6000 }
  ];
}
