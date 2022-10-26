import {
  Component,
  OnInit,
} from "@angular/core";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {EmailService} from "../../utils";
import {
  Email,
  EmailWrapper,
} from "../../utils/emailWrapper";

@Component({
  selector: "lib-inbox",
  templateUrl: "./inbox.component.html",
  styleUrls: ["./inbox.component.scss"],
})
export class InboxComponent implements OnInit {
  emails : Subject<EmailWrapper>;

  constructor(
    private readonly _emailService : EmailService,
    private readonly _router : Router,
  ) {
    this.emails = new Subject<EmailWrapper>();
  }

  ngOnInit() : void {
    this.emails = this._emailService.emails;
  }

  public openInChat(subItem : Email) : void {
    this._router.navigateByUrl(`chat/${subItem.id}`);
  }
}
