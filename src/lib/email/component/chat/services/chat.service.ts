import {HttpClient} from '@angular/common/http';
import {
  Inject,
  Injectable
} from '@angular/core';
import {Observable} from 'rxjs';
import {Chat} from '../../../utils';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private readonly _httpClient : HttpClient, @Inject(
    'env') private environment : any) { }

  public getChatById(id : number) :Observable<Chat> {
    return this._httpClient.get<Chat>(`${this.environment.api}/email/${id}`);
  }
}
