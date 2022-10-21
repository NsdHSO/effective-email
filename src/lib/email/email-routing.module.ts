import {NgModule} from "@angular/core";
import {
  RouterModule,
  Routes,
} from "@angular/router";
import {
  ChatComponent,
  InboxComponent,
} from "./component";
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
        resolve: {
          data: EmailResolver,
        },
      },
      {
        path: ":id",
        component: ChatComponent,
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
