import {HttpClient} from '@angular/common/http';
import {
  Inject,
  Injectable
} from '@angular/core';
import {LocalStorageService} from 'ngx-driver';
import {
  of,
  Subject
} from 'rxjs';
import {
  EmailWrapper,
  WrapperObject
} from '../emailWrapper';
import {WebsocketService} from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  public emails : Subject<EmailWrapper> = new Subject<EmailWrapper>();
  public permission;

  constructor(private readonly _httpClient : HttpClient,
    @Inject(
      'env') private environment : any,
    private readonly _socket : WebsocketService,
    private readonly _localStorage : LocalStorageService
  ) {
    this.permission = JSON.parse(
      _localStorage.geItem(
        'permission')) as WrapperObject;
  }

  public getEmails(
    item = 30, page = 0) {
    return this._httpClient.get<EmailWrapper>(
      `${this.environment.api}/email/${item}/${page}`)
      .subscribe(emails => {
        if(emails != undefined) {
          this.emails.next(emails);
          return of(true);
        }
        return of(false);
      });
  }

  public getFilteredData(query : string) {
    this._httpClient.get<EmailWrapper>(
      `${this.environment.api}/email/search/${query}`)
      .subscribe(emails => {
        if(emails != undefined) {
          const newEmail = {
            emails: emails as any,
            total: 0
          } as EmailWrapper;
          this.emails.next(newEmail);
          return of(true);
        }
        return of(false);
      });
  }
}
