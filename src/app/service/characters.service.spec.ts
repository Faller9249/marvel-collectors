import { TestBed } from '@angular/core/testing';

import { CharacterssService } from './characters.service';

describe('CharacterssService', () => {
  let service: CharacterssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
