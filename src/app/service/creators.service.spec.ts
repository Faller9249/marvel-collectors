import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreatorsService } from './creators.service';

describe('CreatorsService', () => {
  let service: CreatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CreatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
