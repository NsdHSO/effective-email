import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InboxComponent} from "./component";
import {EmailComponent} from "./email.component";

const routes : Routes = [
  {
    path     : "",
    component: EmailComponent,
    children : [
      {
        path     : "",
        component: InboxComponent,
      },
    ],
  },
];

@NgModule({
            imports: [
              RouterModule.forChild(routes),
            ],
          })
export class EmailRoutingModule {}
