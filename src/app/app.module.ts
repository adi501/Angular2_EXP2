import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./Employee/Employee.component";
import { EXP1 } from "./EXP1/EXP1.Component";

@NgModule({
  declarations: [AppComponent, EmployeeComponent, EXP1],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, EmployeeComponent, EXP1]
})
export class AppModule {}
