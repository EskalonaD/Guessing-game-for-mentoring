import { TestBed } from '@angular/core/testing';

import { GuesserService } from './guesser.service';

describe('GuesserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuesserService = TestBed.get(GuesserService);
    expect(service).toBeTruthy();
  });
});
