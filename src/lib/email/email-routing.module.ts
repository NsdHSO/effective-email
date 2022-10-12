import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EmailComponent} from "./email.component";

const routes : Routes = [
  {
    path     : "",
    component: EmailComponent,
    resolve  : {
      // data: GetAllToDoResolver,
    },
  },
];

@NgModule({
            imports: [
              RouterModule.forChild(routes),
            ],
          })
export class EmailRoutingModule {}
