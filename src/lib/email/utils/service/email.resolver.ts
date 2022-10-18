import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {EmailService} from "./email.service";

@Injectable({
  providedIn: 'root'
})
export class EmailResolver implements Resolve<boolean> {

  constructor(private readonly _emailService: EmailService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this._emailService.getEmails()
    return of(true);
  }
}
