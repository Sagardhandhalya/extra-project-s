import { TestBed } from '@angular/core/testing';

import { FetchguestService } from './fetchguest.service';

describe('FetchguestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchguestService = TestBed.get(FetchguestService);
    expect(service).toBeTruthy();
  });
});
