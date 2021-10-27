import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegistrationService } from './registration.service';
import { HttpClient } from '@angular/common/http';
import { newAccount } from '../models/newAccount';

describe('RegistrationService', () => {
  let service: RegistrationService;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RegistrationService);
    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send account in post request', () => {
    const testData: Account = {
      id: 0,
      email: '',
      username: '',
      password: '',
      name: '',
      profilepic: '',
    };

    service.newAccount(testData).subscribe(data =>
      expect(data).toEqual(testData))

    const req = httpTestingController.expectOne(service.url);

    expect(req.request.method).toEqual('POST');

    req.flush(testData);

    httpTestingController.verify();
  }

  );
});
