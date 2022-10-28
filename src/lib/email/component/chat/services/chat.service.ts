import {HttpClient} from '@angular/common/http';
import {
  Inject,
  Injectable
} from '@angular/core';
import {
  Subject,
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
  public chatSubject = new Subject<any>();

  constructor(private readonly _httpClient : HttpClient, @Inject(
    'env') private environment : any) { }

  public getChatById(id : number) {
    this._httpClient.get<WrapperChat>(`${this.environment.api}/email/${id}`)
      .subscribe(resp => {
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
