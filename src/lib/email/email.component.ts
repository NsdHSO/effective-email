import {
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from "@angular/router";
import {LocalStorageService} from "ngx-driver";
import {
  debounce,
  interval,
  Subject,
  takeUntil,
} from "rxjs";
import {EmailService} from "./utils";

@Component({
  selector: "lib-email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.scss"],
})
export class EmailComponent implements OnInit, OnDestroy {
  public inputFilter : string = "";
  public userQuestionUpdate : Subject<string> = new Subject<string>();
  public chatId : string | null = null;
  private destroy$ : Subject<any> = new Subject<any>();

  constructor(private readonly _emailService : EmailService
    , private readonly _router : Router,
    private readonly _activatedRouter : ActivatedRoute,
    private readonly _localStorage : LocalStorageService,
  ) { }

  ngOnInit() : void {
    this.userQuestionUpdate.pipe(
      debounce(() => interval(500)),
      takeUntil(this.destroy$),
    )
      .subscribe(typed => {
        typed.length
          ? this._emailService.getFilteredData(typed)
          :
          this._emailService.getEmails();
      });
    this._router.events
      .subscribe((event) => {
        if(event instanceof NavigationEnd || event instanceof NavigationStart) {
          this.chatId = event.url.split("/")[1];
        }
      });
  }

  public trgger() {
  }

  public ngOnDestroy() : void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
