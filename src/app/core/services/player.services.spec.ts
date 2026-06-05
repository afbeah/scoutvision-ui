import { TestBed } from '@angular/core/testing';

import { PlayerServices } from './player.services';

describe('PlayerServices', () => {
  let service: PlayerServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
