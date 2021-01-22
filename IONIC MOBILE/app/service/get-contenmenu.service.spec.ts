import { TestBed } from '@angular/core/testing';

import { GetContenmenuService } from './get-contenmenu.service';

describe('GetContenmenuService', () => {
  let service: GetContenmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetContenmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
