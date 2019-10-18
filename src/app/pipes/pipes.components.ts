import { Component } from "@angular/core";

@Component({
  selector: "pipes",
  templateUrl: "./pipes.components.html",
  styleUrls: ["./pipes.components.css"]
})
export class pipes {
  employees: any[] = [
    { Id: 1, Name: "Emp1", Sal: 1000, DOB: "14/10/1991" },
    { Id: 2, Name: "Emp2", Sal: 2000, DOB: "16/10/1980" },
    { Id: 3, Name: "Emp3", Sal: 3000, DOB: "19/10/1989" },
    { Id: 4, Name: "Emp4", Sal: 5000, DOB: "22/10/1980" },
    { Id: 5, Name: "Emp5", Sal: 6000, DOB: "14/12/1980" }
  ];
}
