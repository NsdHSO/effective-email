import {HttpClientModule} from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed
} from '@angular/core/testing';
import {expect} from '@angular/flex-layout/_private-utils/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {environment} from '../../../../../src/environments/environment';
import {EmailComponent} from './email.component';
import {
  EmailService,
  FilterAction,
  Label,
  WrapperObject
} from './utils';

function emailState() {
  return {
    permission: {
      inbox: {
        actions: {} as FilterAction,
        label: {} as Label
      }
    }
  };
}

describe(
  'EmailComponent',
  () => {
    let component : EmailComponent;
    let fixture : ComponentFixture<EmailComponent>;
    beforeEach(fakeAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EmailComponent],
        imports: [
          HttpClientModule,
          RouterTestingModule
        ],
        providers: [
          {
            provide: EmailService,
            useValue: emailState()
          },
          {
            provide: 'env',
            useValue: environment
          }
        ]
      })
        .compileComponents();
      fixture = TestBed.createComponent(EmailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));
    it(
      'should create',
      () => {
        component.permission = {
          inbox: {
            actions: {} as FilterAction,
            label: {} as Label
          }
        } as WrapperObject;
        expect(component)
          .toBeTruthy();
      }
    );
    it('should be call be', function() {
      spyOn(component, '_makeObjectToActionAndLabel');
      component._makeObjectToActionAndLabel();
      expect(component._makeObjectToActionAndLabel)
        .toHaveBeenCalled();
    });
    it('should be init', fakeAsync(() => {
      spyOn(component, '_makeObjectToActionAndLabel');
      component.ngOnInit();
      expect(component._makeObjectToActionAndLabel)
        .toHaveBeenCalledOnceWith();
    }));
  }
);
