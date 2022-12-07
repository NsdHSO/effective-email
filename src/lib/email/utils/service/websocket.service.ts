import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  // socket : Socket<any> =
  // io("http://localhost:3000");
  constructor() {
  }

  public emitValueOnEvent(
    event : string, value : any) {
    // this.socket.emit('retest', )
  }

  public roomSendValue(
    room : string, event : string) {
    // this.socket.emit(event, room)
  }
}

interface ServerToClientEvents {
  noArg : () => void;
  basicEmit : (
    a : number, b : string,
    c : Buffer) => void;
  withAck : (
    d : string,
    callback : (e : number) => void) => void;
}

