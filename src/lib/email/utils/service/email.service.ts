import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {of, Subject} from "rxjs";
import {Email, EmailWrapper} from "../emailWrapper";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  public emails : Subject<EmailWrapper> = new Subject<EmailWrapper>();

  constructor(private readonly _httpClient : HttpClient, @Inject("env") private environment : any) { }

  public getEmails(item = 10, page = 0) {
    this._httpClient.get<EmailWrapper>(`${this.environment.api}/email/${item}/${page}`)
      .subscribe(emails => {
        if(emails != undefined) {
          this.emails.next(emails);
          return of(true);
        }
        return of(false);
      });
  }

  public getFilteredData(query: string){
    this._httpClient.get<EmailWrapper>(`${this.environment.api}/email/search/${query}`)
      .subscribe(emails => {
        if(emails != undefined) {
          const newEmail = {
            emails: emails as any,
            total: 0
          } as EmailWrapper
          debugger
          this.emails.next(newEmail);
          return of(true);
        }
        return of(false);
      });
  }
}
