import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InboxComponent} from "./component";
import {EmailComponent} from "./email.component";
import {EmailResolver} from "./utils/service/email.resolver";

const routes : Routes = [
  {
    path: "",
    component: EmailComponent,
    children: [
      {
        path: "",
        component: InboxComponent,
        resolve: {dataEmail: EmailResolver},
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
