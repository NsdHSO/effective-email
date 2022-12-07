import {HttpClientModule} from '@angular/common/http';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {environment} from '../../../../../../../src/environments/environment';
import {ChatComponent} from './chat.component';

describe(
  'ChatComponent',
  () => {
    let component : ChatComponent;
    let fixture : ComponentFixture<ChatComponent>;
    beforeEach(async () => {
      await TestBed.configureTestingModule(
        {
          declarations: [ChatComponent],
          imports: [
            HttpClientModule,
            RouterTestingModule
          ],
          providers: [
            {
              provide: 'env',
              useValue: environment
            }
          ]
        })
        .compileComponents();
      fixture = TestBed.createComponent(
        ChatComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    it(
      'should create',
      () => {
        expect(component)
          .toBeTruthy();
      }
    );
  }
);
