import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {environment} from '../../../../../../../src/environments/environment';
import {EmailService} from './email.service';

describe(
  'EmailService',
  () => {
    let service : EmailService;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule
        ],
        providers: [
          {
            provide: 'env',
            useValue: environment
          }
        ]
      });
      service = TestBed.inject(EmailService);
    });
    it(
      'should be created',
      () => {
        expect(service)
          .toBeTruthy();
      }
    );
  }
);
