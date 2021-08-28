import { TestBed } from '@angular/core/testing';

import { IpbucketService } from './ipbucket.service';

describe('IpbucketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpbucketService = TestBed.get(IpbucketService);
    expect(service).toBeTruthy();
  });
});
