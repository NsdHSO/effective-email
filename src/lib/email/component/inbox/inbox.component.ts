import {Component, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {EmailService} from "../../utils";
import {EmailWrapper} from "../../utils/emailWrapper";

@Component({
  selector: "lib-inbox",
  templateUrl: "./inbox.component.html",
  styleUrls: ["./inbox.component.scss"],
})
export class InboxComponent implements OnInit {
  emails : Subject<EmailWrapper>;

  constructor(private readonly _emailService : EmailService) {
    this.emails = new Subject<EmailWrapper>();
  }

  ngOnInit() : void {
    this.emails = this._emailService.emails;
  }
}
