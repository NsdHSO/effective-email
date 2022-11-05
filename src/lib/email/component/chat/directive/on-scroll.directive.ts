import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  debounce,
  fromEvent,
  interval,
  Observable
} from 'rxjs';

export interface Viewport {
  width : number;
  height : number;
}

// InfiniteScrollContext represents the context in which the directive will run.
//
// The default is 'document' and this will trigger your action when the end of
// your element has been reached relative to the documents scrollbar.
//
// If you use 'self', your action will be triggered when the end of your element
// has been reached relative to your elements own scrollbar.
export type InfiniteScrollContext =
  'self'
  | 'document';

@Directive({
  selector: '[libOnScroll]'
})
export class OnScrollDirective implements OnInit {
  @Input() infiniteScrollContext : InfiniteScrollContext = 'document';
  @Output() infiniteScrollAction : EventEmitter<any> = new EventEmitter();
  private el : any;
  private viewport : Viewport;
  private scrollEvent$ : Observable<any> | undefined;

  constructor(private element : ElementRef) {
    this.el = element.nativeElement;
    this.viewport = this.getViewport(window);
  }

  ngOnInit() {
    if(this.infiniteScrollContext === 'self') {
      this.scrollEvent$ = fromEvent(this.el, 'scroll')
        .pipe(debounce(() => interval(200)));
      this.scrollEvent$.subscribe((e : any) => {
        if(e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight) {
          this.infiniteScrollAction.emit(null);
        }
      });
    }
    else if(this.infiniteScrollContext === 'document') {
      this.scrollEvent$ = fromEvent(window.document, 'scroll')
        .pipe(debounce(() => interval(200)));
      this.scrollEvent$.subscribe(() => {
        const rect = this.el.getBoundingClientRect();
        const elementTopRelativeToViewport = rect.top;
        const elementTopRelativeToDocument = elementTopRelativeToViewport + window.pageYOffset;
        const scrollableDistance = this.el.offsetHeight + elementTopRelativeToDocument;
        const currentPos = window.pageYOffset + this.viewport.height;
        if(currentPos > scrollableDistance) {
          this.infiniteScrollAction.emit(null);
        }
      });
    }
    else {
      throw new Error(
        `'infiniteScrollContext' contains invalid value ${this.infiniteScrollContext}. Only 'self' and 'document' are allowed.`);
    }
  }

  private getViewport(win : Window) : Viewport {
    // This works for all browsers except IE8 and before
    if(win.innerWidth != null) {
      return {
        width: win.innerWidth,
        height: win.innerHeight
      };
    }
    // For IE (or any browser) in Standards mode
    let d = win.document;
    if(document.compatMode == 'CSS1Compat') {
      return {
        width: d.documentElement.clientWidth,
        height: d.documentElement.clientHeight
      };
    }
    // For browsers in Quirks mode
    return {
      width: d.body.clientWidth,
      height: d.body.clientHeight
    };
  }
}
