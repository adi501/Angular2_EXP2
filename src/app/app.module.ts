import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./Employee/Employee.component";
import { EXP1 } from "./EXP1/EXP1.Component";
import { Components_EXP1 } from "./components_EXP1/Components_EXP1.component";
import { Components_EXP2 } from "./Components_EXP2/Components_EXP2.Component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EXP1,
    Components_EXP1,
    Components_EXP2
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [
    AppComponent,
    EmployeeComponent,
    EXP1,
    Components_EXP1,
    Components_EXP2
  ]
})
export class AppModule {}
