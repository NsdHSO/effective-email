import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {environment} from '../../../../../../../../src/environments/environment';
import {ChatService} from './chat.service';

describe('ChatService', () => {
  let service : ChatService;
  let httpTestingController : HttpTestingController;
  let mockContact : any;
  beforeEach(() => {
    mockContact = {
      id: 100,
      name: 'Erin Dee',
      email: 'edee@example.com'
    };
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: 'env',
          useValue: environment
        }
      ]
    });
    service = TestBed.inject(ChatService);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  it('should be created', () => {
    expect(service)
      .toBeTruthy();
  });
  it('should getChatByID', function() {
    service.getChatById(2)
      .subscribe((message) => {
        expect(message).not.toHaveBeenCalled()
        const req = httpTestingController.expectOne('http://localhost:3000/email/3');
        expect(req.request.method).toEqual('POST')
        req.flush([mockContact]);
        httpTestingController.verify();
      });
  });
});
