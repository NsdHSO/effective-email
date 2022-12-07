import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import {ChatService} from '../chat.service';

@Injectable({
  providedIn: 'root'
})
export class ChatResolver implements Resolve<any> {
  public constructor(private _chatService : ChatService) {
  }

  resolve(
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot) {
    if(route.paramMap.get(
      'id') !== null) {
      this._chatService.getChatById(
        parseInt(
          <string> route.paramMap.get(
            'id'), 10));
    }
  }
}
