import { TestBed } from '@angular/core/testing';

import { UserWService } from './user-w.service';

describe('UserWService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserWService = TestBed.get(UserWService);
    expect(service).toBeTruthy();
  });
});
