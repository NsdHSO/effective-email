import {
  Component,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'lib-input-chat',
  templateUrl: './input-chat.component.html',
  styleUrls: ['./input-chat.component.scss']
})
export class InputChatComponent {
  message = new FormControl('');
  @Output()
  messageFormEvent = new EventEmitter<string>();

  sendMessage() {
    if(this.message.value !== null) {
      this.messageFormEvent.next(
        this.message.value);
      this.message.reset();
    }
  }

  @HostListener(
    'window:keydown', ['$event'])
  onKeydown(event : any) {
    if(event.key === 'Enter' || (event.key === 'Enter' && event.key === 'Meta')) {
      this.sendMessage();
    }
  }
}
