import {Component, OnDestroy, OnInit} from "@angular/core";
import {debounce, interval, Subject, takeUntil} from "rxjs";
import {EmailService} from "./utils";

@Component({
  selector: "lib-email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.scss"],
})
export class EmailComponent implements OnInit, OnDestroy {
  public inputFilter : string                 = "";
  public userQuestionUpdate : Subject<string> = new Subject<string>();
  private destroy$ : Subject<any>             = new Subject<any>();

  constructor(private readonly _emailService : EmailService) { }

  ngOnInit() : void {
    this.userQuestionUpdate.pipe(debounce(() => interval(500)),
      takeUntil(this.destroy$))
      .subscribe(typed => {
        if(typed.length === 0 ){
          this._emailService.getEmails()
          return
        }
        this._emailService.getFilteredData(typed);});
  }

  public ngOnDestroy() : void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
