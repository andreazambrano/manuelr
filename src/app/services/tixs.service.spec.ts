import { TestBed } from '@angular/core/testing';

import { TixsService } from './tixs.service';

describe('TixsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TixsService = TestBed.get(TixsService);
    expect(service).toBeTruthy();
  });
});
