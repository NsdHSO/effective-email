import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Params
} from '@angular/router';
import {
  Observable,
  Subject,
  takeUntil
} from 'rxjs';
import {Chat} from '../../utils';
import {ChatService} from './services';

@Component({
  selector: 'lib-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  public chatMessaged$ : Observable<Chat> = new Subject<Chat>();
  private _chatId = 0;
  private _destroy$ : Subject<any> = new Subject<any>();

  public get chatId() : number {
    return this._chatId;
  }

  public set chatId(value : number) {
    this._chatId = value;
  }

  constructor(
    private readonly _activateRouter : ActivatedRoute,
    private readonly _chatService : ChatService
  ) {
    this._activateRouter.params.pipe(takeUntil(this._destroy$))
      .subscribe((res : Params) => {this._chatId = res['id'];});
  }

  public ngOnInit() : void {
    this.chatMessaged$ = this._chatService.getChatById(this.chatId);
  }

  public ngOnDestroy() : void {
    this._destroy$.next({});
    this._destroy$.complete();
  }
}

