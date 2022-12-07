import {HttpClient} from '@angular/common/http';
import {
  Inject,
  Injectable,
  OnDestroy
} from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  takeUntil,
  tap
} from 'rxjs';
import {
  Entity,
  WrapperChat
} from '../../../utils';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chatSubject = new BehaviorSubject({} as WrapperChat)
  constructor(private readonly _httpClient : HttpClient, @Inject(
    'env') private environment : any) { }

  public getChatById(id : number, item : number = 15, skip : number = 0) {
    this._httpClient.get<WrapperChat>(
      `${this.environment.api}/email/${id}/${item}/${skip || 0}`)
      .subscribe(resp => {
        if(this.chatSubject.getValue().email?.messages !== undefined) {
          resp.email.messages = [
             ...this.chatSubject.getValue().email?.messages,...resp.email?.messages,
          ]
        }
        this.chatSubject.next(resp);
      });
  }

  public sendMessage(description : string, sender : Entity, receiver : Entity, chatId : number) {
    const bodyMessage = {
      elienId: sender.id,
      senderId: receiver.id,
      message: description
    };
    return this._httpClient.put<WrapperChat>(
      `${this.environment.api}/chat/message/${chatId}`, bodyMessage)
      .pipe(
        tap(() => this.getChatById(chatId)))
      .subscribe();
  }
}
