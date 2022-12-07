import {
  Directive,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

@Directive({
  selector: '[libOnScroll]'
})
export class OnScrollDirective implements OnInit, OnDestroy {
  @Output(
    'appScroll') valueChange = new EventEmitter();
  scroll = (e : Event | any) => {
    //e.target.scrollTop = current
    // scroll position
    // e.target.scrollHeight -
    // e.target.offsetHeight - to
    // calculate the bottom. equivalent
    // to scrollTopMax in FF
    console.log(
      e.target?.scrollTop,
      e.target.scrollHeight - e.target.offsetHeight
    );
    if(Math.trunc(
      e.target?.scrollTop + 1) === e.target.scrollHeight - e.target.offsetHeight) {
      console.log(
        'You reached the bottom!');
      this.valueChange.next({});
    }
    //handle your scroll here
    //notice the 'odd' function
    // assignment to a class field this
    // is used to be able to remove the
    // event listener
  };

  constructor(
    private ngZone : NgZone,
    private _elementRef : ElementRef) {
    _elementRef.nativeElement.scrollTop = _elementRef.nativeElement.scrollHeight;
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(
      () => {
        window.addEventListener(
          'scroll', this.scroll, true);
      });//third parameter
  }

  ngOnDestroy() {
    window.removeEventListener(
      'scroll', this.scroll, true);
  }
}
