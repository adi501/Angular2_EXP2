import { Component } from "@angular/core";

@Component({
  selector: "NestedComponents",
  template: `
    {{ PageHead }}
    <NestedComponentsEMP></NestedComponentsEMP>
  `
})
export class NestedComponents {
  PageHead: string = "EMP Details";
}
