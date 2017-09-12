import { TestBed, async, inject } from '@angular/core/testing';

import { PrivateProfileGuard } from './private-profile.guard';

describe('PrivateProfileGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateProfileGuard]
    });
  });

  it('should ...', inject([PrivateProfileGuard], (guard: PrivateProfileGuard) => {
    expect(guard).toBeTruthy();
  }));
});
