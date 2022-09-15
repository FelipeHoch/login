import { TestBed } from '@angular/core/testing';

import { HttpGenericService } from './http-generic.service';

import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

describe('HttpGenericService', () => {
  let httpTestingController: HttpTestingController;
  let service: HttpGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpGenericService]
    });
    service = TestBed.inject(HttpGenericService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should on post call method make a http request', () => {
    service.post('https://6321ea2e82f8687273bc8eaf.mockapi.io/api/login', '').subscribe();

    const req = httpTestingController.expectOne('https://6321ea2e82f8687273bc8eaf.mockapi.io/api/login');

    expect(req.request.method).toEqual('POST');

    req.flush({});

    httpTestingController.verify();
  });

  it('should params sent from post method correct', () => {
    service.post('https://6321ea2e82f8687273bc8eaf.mockapi.io/api/login', 'test params').subscribe();

    const req = httpTestingController.expectOne('https://6321ea2e82f8687273bc8eaf.mockapi.io/api/login');

    expect(req.request.body).toContain('test params');

    req.flush({});

    httpTestingController.verify();
  });

});
