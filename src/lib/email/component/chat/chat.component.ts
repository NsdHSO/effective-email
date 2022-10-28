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
  Subject,
  takeUntil
} from 'rxjs';
import {
  Chat,
  Entity
} from '../../utils';
import {ChatService} from './services';

@Component({
  selector: 'lib-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  public chatMessaged = {} as Chat;
  private _chatId = 0;
  private _destroy$ : Subject<any> = new Subject<any>();
  private receiver = {} as Entity;
  private sender = {} as Entity;

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
    this._chatService.chatSubject
      .pipe(takeUntil(this._destroy$))
      .subscribe(chatMessage => {
        this.sender = chatMessage.sender;
        this.receiver = chatMessage.receiver;
        this.chatMessaged = chatMessage.email;
      });
  }

  public sendMessage(event : string) {
    this._chatService.sendMessage(event, this.sender, this.receiver, this._chatId);
    console.log(event, this.chatMessaged);
    console.log(event);
  }

  public ngOnDestroy() : void {
    this._destroy$.next({});
    this._destroy$.complete();
  }
}

