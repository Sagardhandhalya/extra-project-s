import { TestBed } from '@angular/core/testing';

import { FetchusertaskService } from './fetchusertask.service';

describe('FetchusertaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchusertaskService = TestBed.get(FetchusertaskService);
    expect(service).toBeTruthy();
  });
});
