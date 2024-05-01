import { TestBed } from '@angular/core/testing';

import { FireabaseControlService } from './fireabase-control.service';

describe('FireabaseControlService', () => {
  let service: FireabaseControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireabaseControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
