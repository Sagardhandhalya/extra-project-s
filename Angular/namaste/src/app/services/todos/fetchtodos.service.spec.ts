import { TestBed } from '@angular/core/testing';

import { FetchtodosService } from './fetchtodos.service';

describe('FetchtodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchtodosService = TestBed.get(FetchtodosService);
    expect(service).toBeTruthy();
  });
});
