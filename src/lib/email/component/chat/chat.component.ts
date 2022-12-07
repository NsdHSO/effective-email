import {
  ChangeDetectorRef,
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
  currentPage : number = 1;
  news : Array<any> = [];
  scrollCallback : any;
  name = 'Angular 6';
  arr : string[] = [''];
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  private _chatId = 0;
  private _destroy$ : Subject<any> = new Subject<any>();
  private _receiver = {} as Entity;
  private _sender = {} as Entity;
  private processData = () => {
    this.currentPage++;
  };

  public get receiver() : Entity {
    return this._receiver;
  }

  public set receiver(value : Entity) {
    this._receiver = value;
  }

  public get sender() : Entity {
    return this._sender;
  }

  public set sender(value : Entity) {
    this._sender = value;
  }

  public get chatId() : number {
    return this._chatId;
  }

  public set chatId(value : number) {
    this._chatId = value;
  }

  constructor(
    private readonly _activateRouter : ActivatedRoute,
    private readonly _chatService : ChatService,
    private readonly _changeDetection : ChangeDetectorRef
  ) {
    this._activateRouter.params.pipe(
      takeUntil(this._destroy$))
      .subscribe(
        (res : Params) => {this._chatId = res['id'];});
    this.scrollCallback = this.getStories.bind(
      this);
  }

  public ngOnInit() : void {
    this._chatService.chatSubject
      .pipe(takeUntil(this._destroy$))
      .subscribe(chatMessage => {
        this._sender = chatMessage.sender;
        this._receiver = chatMessage.receiver;
        this.chatMessaged = chatMessage.email;
      });
  }

  getStories() {
    this._chatService.getChatById(
      this.chatId, 20,
      this.currentPage
    );
    this.processData();
  }

  public sendMessage(event : string) {
    this._chatService.sendMessage(
      event, this._sender,
      this._receiver, this._chatId
    );
  }

  onScrollDown() {
    this._changeDetection.detectChanges();
    console.log('scrolled down!!');
    this.getStories();
    this._changeDetection.detectChanges();
  }

  public ngOnDestroy() : void {
    this._destroy$.next({});
    this._destroy$.complete();
  }
}

