import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./Employee/Employee.component";
import { EXP1 } from "./EXP1/EXP1.Component";
import { Components_EXP1 } from "./components_EXP1/Components_EXP1.component";
import { Components_EXP2 } from "./Components_EXP2/Components_EXP2.Component";
import { templateurl } from "./Templateurl/templateurl.component";
import { NestedComponents } from "./NestedComponents/NestedComponents.Component";
import { NestedComponentsEMP } from "./NestedComponents/NestedComponentsEMP.Component";
import { Styling } from "./StylingEXP/Styling.Components";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EXP1,
    Components_EXP1,
    Components_EXP2,
    templateurl,
    NestedComponents,
    NestedComponentsEMP,
    Styling
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [
    AppComponent,
    EmployeeComponent,
    EXP1,
    Components_EXP1,
    Components_EXP2,
    templateurl,
    NestedComponents,
    NestedComponentsEMP,
    Styling
  ]
})
export class AppModule {}
