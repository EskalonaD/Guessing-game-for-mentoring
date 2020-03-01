import { TestBed } from '@angular/core/testing';

import { PuzzlerService } from './puzzler.service';

describe('PuzzlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuzzlerService = TestBed.get(PuzzlerService);
    expect(service).toBeTruthy();
  });
});
