import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {environment} from '../../../../../../../src/environments/environment';
import {EmailResolver} from './email.resolver';

describe(
  'EmailResolver',
  () => {
    let resolver : EmailResolver;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule
        ], providers: [
          {
            provide: 'env',
            useValue: environment
          }
        ]
      });
      resolver = TestBed.inject(EmailResolver);
    });
    it(
      'should be created',
      () => {
        expect(resolver)
          .toBeTruthy();
      }
    );
  }
);
