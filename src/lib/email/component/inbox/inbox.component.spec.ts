import {HttpClientModule} from '@angular/common/http';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {environment} from '../../../../../../../src/environments/environment';
import {InboxComponent} from './inbox.component';

describe(
  'InboxComponent',
  () => {
    let component : InboxComponent;
    let fixture : ComponentFixture<InboxComponent>;
    beforeEach(async () => {
      await TestBed.configureTestingModule(
        {
          declarations: [InboxComponent],
          imports: [
            HttpClientModule
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
        InboxComponent);
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
