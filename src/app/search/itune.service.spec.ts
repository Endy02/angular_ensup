import { TestBed } from '@angular/core/testing';

import { ItuneService } from './itune.service';

describe('ItuneService', () => {
  let service: ItuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
