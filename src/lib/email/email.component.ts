import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router
} from '@angular/router';
import {
  debounce,
  interval,
  Subject,
  takeUntil
} from 'rxjs';
import {
  EmailService,
  WrapperObject
} from './utils';

@Component({
  selector: 'lib-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit, OnDestroy {
  public inputFilter : string = '';
  public userQuestionUpdate : Subject<string> = new Subject<string>();
  public chatId : string | null = null;
  public permission : WrapperObject = {} as WrapperObject;
  public permissionInbox : { inboxAction : any, labelAction : any } = {} as any;
  private destroy$ : Subject<any> = new Subject<any>();

  constructor(private readonly _emailService : EmailService
    , private readonly _router : Router,
    private readonly _activatedRouter : ActivatedRoute
  ) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // subscribing to NavigationEnd which is about to happen
        console.log(event)
      }
    });
  }

  ngOnInit() : void {


    this.userQuestionUpdate.pipe(
      debounce(() => interval(500)),
      takeUntil(this.destroy$)
    )
      .subscribe(typed => {
        typed.length
          ? this._emailService.getFilteredData(typed)
          :
          this._emailService.getEmails();
      });
    this._router.events.pipe(takeUntil(this.destroy$))
      .subscribe((event) => {
        if(event instanceof NavigationEnd || event instanceof NavigationStart) {
          this.chatId = event.url.split('/')[ event.url.split('/').length -1]
          console.log(this.chatId)

        }
      });
    this.permission = this._emailService.permission;
    this._makeObjectToActionAndLabel();
  }

  public _makeObjectToActionAndLabel() : void {
    let action = this.permission.inbox.actions as any;
    let label = this.permission.inbox.label as any;
    let str : any[] = [];
    Object.keys(action)
      .forEach((key : any) => {
        str.push({
          value: action[key],
          key: key[0].toUpperCase() + key.substring(1)
        });
      });
    str.shift();
    this.permissionInbox.inboxAction = str.filter(r => r.value === true);
    str = [];
    Object.keys(label)
      .forEach((key : any) => {
        str.push({
          value: label[key],
          key: key[0].toUpperCase() + key.substring(1)
        });
      });
    str.shift();
    this.permissionInbox.labelAction = str.filter(r => r.value === true);
  }

  public ngOnDestroy() : void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  public navigateBack() : void {
    this._router.navigateByUrl('/email')
  }
}
