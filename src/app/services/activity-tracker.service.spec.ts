import { TestBed } from '@angular/core/testing';

import { ActivityTrackerService } from './activity-tracker.service';

describe('ActivityTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityTrackerService = TestBed.get(ActivityTrackerService);
    expect(service).toBeTruthy();
  });
});
